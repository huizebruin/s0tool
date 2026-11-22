🇬🇧 English · [🇳🇱 Nederlands](CHANGELOG.md)

# Changelog

All notable changes. Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
versions follow [SemVer](https://semver.org/).

A new release is created automatically when `project_version` in
`esphome/components/basis.yaml` changes. Add a `## [x.y.z]` section here (and in `CHANGELOG.md`)
first, otherwise the release fails with a clear error.

## [3.6.13] - 2026-11-22

### Added
- **New configuration `s0tool-dsz15de-3x80a-water`:** the Eltako DSZ15DE-3x80A (kWh) with a water meter, with English entity names (`esphome/DSZ15DE-3x80A-water_eng.yaml`, `esphome/components/kwhpuls_DSZ15DE.yaml`). The S0 input uses a 30 ms filter for this meter's short pulses, default 2000 imp/kWh (adjustable 10-4000). Entity IDs are English, like `s0tool-standard-eng`.
- **Installation page:** new "DSZ15DE-3x80A-water" card with a photo of the meter.
- The new configuration is added to `build.yml`, so the firmware and manifest are built automatically.

### Changed
- **ESPHome 2026.11:** the firmware is built with ESPHome 2026.11.0 (was 2026.10.0).
- `tx_buffer_size: 200` commented out in `basis.yaml` and `basis_eng.yaml`: the logger now uses ESPHome's default buffer size again.
- **Installation page:** the "Puls Water Internal" card pointed to a manifest that did not exist (`s0tool-puls-water-internal`) and now uses the real name `s0tool-standard-internal`. The "Flux & Puls" card is removed: it had no firmware, "Standard Flux" covers this.

## [3.6.12] - 2026-11-15

### Added
- **New configuration `s0tool-standard-eng`:** the Standard (water meter + kWh) with English entity names for international users (`esphome/pulscounter_eng.yaml`, `basis_eng.yaml`, `kwhpuls_eng.yaml`, `watermeter_eng.yaml`). Entity IDs are English here (for example `sensor.current_power`), so the existing Dutch Home Assistant packages and utility meters do not match automatically. The diagnostic sensor names (`s0tool online since`, `s0tool IP address`, `s0tool MAC address`) deliberately do not contain the device name, so they translate better.
- The English Home Assistant actions are called `meter_reading_water` and `meter_reading_kwh`.
- **Home Assistant files for the English Standard:** `packages/s0tool_standard_eng.yaml` and `utility_meter/utility_eng.yaml` with English entity IDs. The Dutch files (`packages/s0tool_nl.yaml`, `utility_meter/utility.yaml`) stay for the Dutch Standard and now have a header saying so.
- **README:** a "Which Standard do you have?" section, and a Dutch and an English variant for utility meters, update notifications and adjusting meter readings.

### Changed
- **Installation page:** "Standard (English entity names)" is now the preselected default configuration, and the existing card is called "Standard (Dutch entity names)".
- The new configuration is listed in the table on the CI/CD page. It is added to `build.yml` after merging, because the firmware fetches its components via `ref: main`.

## [3.6.11] - 2026-11-07

### Added
- **Translations for Home Assistant** in `s0tool_translations/`: Nederlands, English, Deutsch and Français (49 entities per language). Only the displayed name changes; entity IDs stay the same, so dashboards, utility meters and the Energy dashboard keep working.
- **New Translations page** on s0tool.nl with a language picker and download (zip), in the menu of every page.
- **Translation checks:** `check_translations.py` and the *Translations* workflow verify that the files are valid YAML and contain the same entities. The download files are generated automatically on every site build.

### Changed
- **Improved installation page:** every configuration card now shows what it is for, the pins (D2/D5), example meters and the default imp/kWh, so it is easier to pick the right configuration. The Translations link is also in the menu.
- **Website updated with a better typeface:** the configuration cards now use a clearly readable sans-serif font (DM Sans) instead of Space Mono.
- `esp8266_store_log_strings_in_flash` commented out in `basis.yaml`: ESPHome ignores this option and will reject it from 2027.4.0.
- README: explanation of the translations.

## [3.6.10] - 2026-10-29

### Changed
- **Minimum versions:** Home Assistant and ESPHome **2026.8** or newer. The firmware is built with ESPHome 2026.8.0.
- Documentation and CI/CD updated for ESPHome 2026.8.
- **Eltako DSZ15DE-3x80A:** the WSZ15D32A configuration and the selector on the installation page now also name this meter model.
- **Navigation:** link to the CI/CD page on every s0tool.nl page.

### Added
- **New CI/CD page** on s0tool.nl, explaining building and releases, with project badges.
- **Cyble Sensor V2:** wiring on the *DIY or buy* page (10K resistor between `GND` and `D2`).
- **kWh meters:** table of known S0 meters and an explanation of pulses per kWh.
- **Utility meters:** troubleshooting section on hourly, daily, weekly and monthly consumption in Home Assistant.
- **Manual Wi-Fi setup** on the installation page, for browsers without Web Serial (Firefox, Safari, mobile): connect to the `S0tool` access point and open `192.168.4.1`.
- **Automatic releases:** a release (with bilingual notes) is created automatically when `project_version` in `basis.yaml` changes.
