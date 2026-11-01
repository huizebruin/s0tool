# Translations / Vertalingen

Show the S0tool entities in your own language in Home Assistant.
Only the displayed name (`friendly_name`) changes. The entity IDs stay the same
(`sensor.actuele_energie`, `sensor.totaal_opgebracht`, ...), so nothing breaks.

| File | Language |
|---|---|
| [`s0tool_nl.yaml`](s0tool_nl.yaml) | Nederlands (the default names, plus Dutch names for the utility meters) |
| [`s0tool_eng.yaml`](s0tool_eng.yaml) | English |
| [`s0tool_de.yaml`](s0tool_de.yaml) | Deutsch |
| [`s0tool_fr.yaml`](s0tool_fr.yaml) | Français |

## Use

1. Copy the `s0tool_translations` folder to your Home Assistant `config/` folder.
2. Add **one** language to `configuration.yaml`, for example English:

   ```yaml
   homeassistant:
     customize: !include s0tool_translations/s0tool_eng.yaml
   ```

3. Restart Home Assistant, or run **Developer tools → YAML → Reload customizations**.

To switch language, change `s0tool_eng.yaml` to another file (`s0tool_nl.yaml`, `s0tool_de.yaml`, `s0tool_fr.yaml`). To go back, remove the lines.
Already have your own customize file? Copy the entries you want into it instead.

## Good to know

- Only what you see in Home Assistant changes. The ESPHome web interface (port 80) stays as it is.
- Entities with your device name in the ID (`... online sinds`, `... IP-adres`, `... Mac-adres`) are included as commented examples at the bottom of each file. Adjust them to your device name.
- Some views in newer Home Assistant versions (for example the device page) show the entity's own name instead of `friendly_name`. Rename the entity under **Settings → Entities** in that case.

## Add a language

1. Copy `s0tool_eng.yaml` to `s0tool_<code>.yaml` (for example `s0tool_es.yaml`).
2. Translate the `friendly_name` values. Do **not** change the entity IDs (the lines ending in `:`) or the `icon` lines.
3. Keep the first line in this format: `# S0tool - Español (es)`.
4. Send a pull request. GitHub checks your file automatically (valid YAML, exactly the same entities as the other languages) and tells you what to fix.

That is all. The download (`.zip`) and the language picker on the website are generated from these files on every site build, so there is nothing else to update.

Want to check it first? `pip install pyyaml`, then run `python3 .github/scripts/check_translations.py`. Add `--build` to also create the website files in `static/` (they are not stored in git) and preview them locally.
