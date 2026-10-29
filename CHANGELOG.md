🇳🇱 Nederlands · [🇬🇧 English](CHANGELOG.en.md)

# Changelog

Alle noemenswaardige wijzigingen. Formaat volgens [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/),
versies volgens [SemVer](https://semver.org/lang/nl/).

Een nieuwe release wordt automatisch gemaakt zodra `project_version` in
`esphome/components/basis.yaml` verandert. Voeg dan eerst hier (en in `CHANGELOG.en.md`) een
sectie `## [x.y.z]` toe, anders mislukt de release met een duidelijke foutmelding.

## [3.6.10] - 2026-09-05

### Gewijzigd
- **Minimale versies:** Home Assistant en ESPHome minimaal **2026.8**. De firmware wordt gebouwd met ESPHome 2026.8.0.
- Documentatie en CI/CD bijgewerkt voor ESPHome 2026.8.
- **Navigatie:** link naar de CI/CD-pagina op alle pagina's van s0tool.nl.

### Toegevoegd
- **Nieuwe CI/CD-pagina** op s0tool.nl, met uitleg over bouwen en releases en de projectbadges.
- **Cyble Sensor V2:** aansluitschema op de pagina *DIY of kopen* (10K-weerstand tussen `GND` en `D2`).
- **kWh-meters:** tabel met bekende S0-meters en uitleg over pulsen per kWh.
- **Utility meters:** uitleg bij problemen oplossen over uur-, dag-, week- en maandverbruik in Home Assistant.
- **Handmatig Wi-Fi instellen** op de installatiepagina, voor wie geen Chrome of Edge heeft (Firefox, Safari, mobiel): verbind met het access point `S0tool` en ga naar `192.168.4.1`.
- **Automatische releases:** er wordt vanzelf een release gemaakt (met tweetalige notities) zodra `project_version` in `basis.yaml` verandert.
