#!/usr/bin/env python3
"""Check (and optionally rebuild) the S0tool translation files.

The language files in s0tool_translations/ are the single source of truth.
Two generated files are published on the website and must follow them:

  static/s0tool_translations.zip   download of the whole folder
  static/s0tool_translations.json  data for the language picker on translations.html

Usage:
  python3 .github/scripts/check_translations.py          check only (used by CI)
  python3 .github/scripts/check_translations.py --fix    rebuild the zip + json, then check

Needs PyYAML (pip install pyyaml). Exit code 1 means something must be fixed.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import zipfile
from pathlib import Path

import yaml

FOLDER = "s0tool_translations"
ZIP_PATH = "static/s0tool_translations.zip"
JSON_PATH = "static/s0tool_translations.json"
REFERENCE = "nl"  # every other language must contain exactly the entities of this one
FILE_RE = re.compile(r"^s0tool_([a-z]{2,3})\.yaml$")
HEADER_RE = re.compile(r"^# S0tool - (?P<label>.+) \((?P<lang>[a-z]{2,3})\)\s*$")
ENTITY_RE = re.compile(r"^[a-z_]+\.[a-z0-9_]+$")
ALLOWED_FIELDS = {"friendly_name", "icon"}
ZIP_DATE = (1980, 1, 1, 0, 0, 0)  # fixed, so rebuilding gives identical bytes


class UniqueKeyLoader(yaml.SafeLoader):
    """SafeLoader that rejects duplicate keys (PyYAML silently keeps the last one)."""

    def construct_mapping(self, node, deep=False):
        seen = set()
        for key_node, _ in node.value:
            key = self.construct_object(key_node, deep=deep)
            if key in seen:
                raise yaml.constructor.ConstructorError(
                    None, None, f"duplicate key '{key}'", key_node.start_mark
                )
            seen.add(key)
        return super().construct_mapping(node, deep)


def language_order(codes):
    """Dutch first, English second, the rest alphabetical (stable for the picker)."""
    first = [c for c in (REFERENCE, "eng") if c in codes]
    return first + sorted(c for c in codes if c not in first)


def load_languages(root: Path, errors: list[str]):
    folder = root / FOLDER
    langs = {}
    for path in sorted(folder.glob("s0tool_*.yaml")):
        m = FILE_RE.match(path.name)
        if not m:
            errors.append(f"{FOLDER}/{path.name}: file name must look like s0tool_<code>.yaml (e.g. s0tool_de.yaml)")
            continue
        code = m.group(1)
        text = path.read_text(encoding="utf-8")
        header = HEADER_RE.match(text.splitlines()[0]) if text.strip() else None
        if not header:
            errors.append(f"{path.name}: first line must be '# S0tool - <Language name> (<code>)', e.g. '# S0tool - Deutsch (de)'")
            continue
        try:
            data = yaml.load(text, Loader=UniqueKeyLoader)
        except yaml.YAMLError as exc:
            errors.append(f"{path.name}: invalid YAML: {exc}")
            continue
        if not isinstance(data, dict) or not data:
            errors.append(f"{path.name}: must be a mapping of entity IDs")
            continue
        langs[code] = {
            "code": code,
            "lang": header["lang"],
            "label": header["label"],
            "file": path.name,
            "text": text,
            "data": data,
        }
    return langs


def check_content(langs: dict, errors: list[str], warnings: list[str]):
    if REFERENCE not in langs:
        errors.append(f"reference language s0tool_{REFERENCE}.yaml is missing or invalid")
        return
    ref = langs[REFERENCE]["data"]
    for code, lang in langs.items():
        name = lang["file"]
        data = lang["data"]
        for entity, body in data.items():
            if not isinstance(entity, str) or not ENTITY_RE.match(entity):
                errors.append(f"{name}: '{entity}' is not a valid entity ID (expected e.g. sensor.actuele_energie)")
                continue
            if not isinstance(body, dict):
                errors.append(f"{name}: {entity} must contain friendly_name (and optionally icon)")
                continue
            extra = set(body) - ALLOWED_FIELDS
            if extra:
                errors.append(f"{name}: {entity} has unsupported field(s): {', '.join(sorted(map(str, extra)))}")
            fn = body.get("friendly_name")
            if not isinstance(fn, str) or not fn.strip():
                errors.append(f"{name}: {entity} needs a non-empty friendly_name")
            elif fn != fn.strip() or "\n" in fn or "\t" in fn:
                errors.append(f"{name}: {entity} friendly_name must not have leading/trailing spaces, tabs or line breaks")
        if code == REFERENCE:
            continue
        missing = [e for e in ref if e not in data]
        extra = [e for e in data if e not in ref]
        for e in missing:
            errors.append(f"{name}: missing entity {e} (present in s0tool_{REFERENCE}.yaml)")
        for e in extra:
            errors.append(f"{name}: unknown entity {e} (not in s0tool_{REFERENCE}.yaml)")
        for e, body in data.items():
            rb = ref.get(e)
            if isinstance(body, dict) and isinstance(rb, dict) and body.get("icon") != rb.get("icon"):
                errors.append(f"{name}: {e} icon must match s0tool_{REFERENCE}.yaml ({rb.get('icon')!r}); icons are not translated")
        same = [
            e for e, body in data.items()
            if isinstance(body, dict) and isinstance(ref.get(e), dict)
            and body.get("friendly_name") == ref[e].get("friendly_name")
        ]
        if same:
            warnings.append(f"{name}: {len(same)} name(s) are identical to Dutch (untranslated?): {', '.join(same[:5])}{' ...' if len(same) > 5 else ''}")


def build_json(langs: dict) -> str:
    order = language_order(langs)
    ref = langs[REFERENCE]["data"]
    payload = {
        "languages": [
            {k: langs[c][k] for k in ("code", "lang", "label", "file")} | {"yaml": langs[c]["text"]}
            for c in order
        ],
        "entities": [
            {"id": e, "names": {c: langs[c]["data"][e]["friendly_name"] for c in order if e in langs[c]["data"]}}
            for e in ref
        ],
    }
    return json.dumps(payload, ensure_ascii=False, indent=1) + "\n"


def zip_members(root: Path) -> dict[str, bytes]:
    folder = root / FOLDER
    return {
        f"{FOLDER}/{p.name}": p.read_bytes()
        for p in sorted(folder.iterdir())
        if p.is_file() and (p.suffix in (".yaml", ".md"))
    }


def build_zip(root: Path):
    out = root / ZIP_PATH
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zf:
        for name, data in zip_members(root).items():
            info = zipfile.ZipInfo(name, ZIP_DATE)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            zf.writestr(info, data)


def check_generated(root: Path, langs: dict, errors: list[str]):
    fix = f"run: python3 .github/scripts/check_translations.py --fix  (then commit {ZIP_PATH} and {JSON_PATH})"
    jpath = root / JSON_PATH
    if not jpath.exists():
        errors.append(f"{JSON_PATH} is missing; {fix}")
    elif jpath.read_text(encoding="utf-8") != build_json(langs):
        errors.append(f"{JSON_PATH} is out of date with {FOLDER}/; {fix}")
    zpath = root / ZIP_PATH
    if not zpath.exists():
        errors.append(f"{ZIP_PATH} is missing; {fix}")
        return
    try:
        with zipfile.ZipFile(zpath) as zf:
            have = {n: zf.read(n) for n in zf.namelist() if not n.endswith("/")}
    except zipfile.BadZipFile:
        errors.append(f"{ZIP_PATH} is not a valid zip; {fix}")
        return
    want = zip_members(root)
    if have != want:
        diff = sorted(set(have) ^ set(want)) or sorted(n for n in want if have.get(n) != want[n])
        errors.append(f"{ZIP_PATH} is out of date ({', '.join(diff)}); {fix}")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--fix", action="store_true", help="rebuild the zip and json from s0tool_translations/")
    ap.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[2], help="repository root")
    args = ap.parse_args()
    root: Path = args.root

    errors: list[str] = []
    warnings: list[str] = []
    langs = load_languages(root, errors)
    check_content(langs, errors, warnings)

    if args.fix:
        if errors:
            print("Fix these problems first, then run --fix again:")
        else:
            (root / JSON_PATH).write_text(build_json(langs), encoding="utf-8")
            build_zip(root)
            print(f"Rebuilt {ZIP_PATH} and {JSON_PATH}")
    if not errors:
        check_generated(root, langs, errors)

    for w in warnings:
        print(f"::warning::{w}")
    for e in errors:
        print(f"::error::{e}")
    if errors:
        print(f"\n{len(errors)} problem(s) found.")
        return 1
    n = len(langs[REFERENCE]["data"])
    print(f"OK: {len(langs)} languages ({', '.join(language_order(langs))}), {n} entities each; zip and json are up to date.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
