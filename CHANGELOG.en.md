🇬🇧 English · [🇳🇱 Nederlands](CHANGELOG.md)

# Changelog

All notable changes. Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
versions follow [SemVer](https://semver.org/).

A new release is created automatically when `project_version` in
`esphome/components/basis.yaml` changes. Add a `## [x.y.z]` section here (and in `CHANGELOG.md`)
first, otherwise the release fails with a clear error.

## [3.6.10] - 2026-09-05

### Changed
- **Minimum versions:** Home Assistant and ESPHome **2026.8** or newer. The firmware is built with ESPHome 2026.8.0.
- Documentation and CI/CD updated for ESPHome 2026.8.

### Added
- **New CI/CD page** on s0tool.nl, explaining building and releases, with project badges.
- **Cyble Sensor V2:** wiring on the *DIY or buy* page (10K resistor between `GND` and `D2`).
- **kWh meters:** table of known S0 meters and an explanation of pulses per kWh.
- **Utility meters:** troubleshooting section on hourly, daily, weekly and monthly consumption in Home Assistant.
