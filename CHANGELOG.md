🇳🇱 Nederlands · [🇬🇧 English](CHANGELOG.en.md)

# Changelog

Alle noemenswaardige wijzigingen. Formaat volgens [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/),
versies volgens [SemVer](https://semver.org/lang/nl/).

Een nieuwe release wordt automatisch gemaakt zodra `project_version` in
`esphome/components/basis.yaml` verandert. Voeg dan eerst hier (en in `CHANGELOG.en.md`) een
sectie `## [x.y.z]` toe, anders mislukt de release met een duidelijke foutmelding.

## [3.6.12] - 2026-11-15

### Toegevoegd
- **Nieuwe configuratie `s0tool-standard-eng`:** de Standard (watermeter + kWh) met Engelse entiteitsnamen voor buitenlandse gebruikers (`esphome/pulscounter_eng.yaml`, `basis_eng.yaml`, `kwhpuls_eng.yaml`, `watermeter_eng.yaml`). Entity-ID's zijn hier Engels (bijvoorbeeld `sensor.current_power`), dus de bestaande Nederlandse Home Assistant packages en utility meters passen er niet automatisch bij. De namen van de diagnostische sensoren (`s0tool online since`, `s0tool IP address`, `s0tool MAC address`) bevatten bewust niet de apparaatnaam, zodat ze beter te vertalen zijn.
- De Engelse Home Assistant-acties heten `meter_reading_water` en `meter_reading_kwh`.
- **Home Assistant-bestanden voor de Engelse Standard:** `packages/s0tool_standard_eng.yaml` en `utility_meter/utility_eng.yaml` met Engelse entity-ID's. De Nederlandse bestanden (`packages/s0tool_nl.yaml`, `utility_meter/utility.yaml`) blijven voor de Nederlandse Standard en hebben nu een kop die dat aangeeft.
- **README:** sectie "Which Standard do you have?" en voor utility meters, updatemeldingen en het aanpassen van meterstanden een Nederlandse en een Engelse variant.

### Gewijzigd
- **Installatiepagina:** "Standard (English entity names)" is nu de standaard voorgeselecteerde configuratie, de bestaande kaart heet "Standard (Dutch entity names)".
- De nieuwe configuratie wordt meegebouwd in `build.yml` en staat in de tabel op de CI/CD-pagina.

## [3.6.11] - 2026-11-07

### Toegevoegd
- **Vertalingen voor Home Assistant** in `s0tool_translations/`: Nederlands, English, Deutsch en Français (49 entiteiten per taal). Alleen de weergegeven naam verandert, de entity-ID's blijven gelijk, dus dashboards, utility meters en het Energy-dashboard blijven werken.
- **Nieuwe pagina Translations** op s0tool.nl met taalkiezer en download (zip), in het menu van alle pagina's.
- **Controle van de vertalingen:** `check_translations.py` en de workflow *Translations* controleren dat de bestanden geldige YAML zijn en dezelfde entiteiten bevatten. De downloadbestanden worden bij elke site-build automatisch gemaakt.

### Gewijzigd
- **Installatiepagina verbeterd:** elke configuratiekaart toont nu waarvoor je hem gebruikt, de pinnen (D2/D5), voorbeeldmeters en de standaard imp/kWh, zodat je makkelijker de juiste configuratie kiest. Ook de Translations-link staat in het menu.
- **Website bijgewerkt met een beter lettertype:** de configuratiekaarten gebruiken nu een duidelijk leesbaar schreefloos lettertype (DM Sans) in plaats van Space Mono.
- `esp8266_store_log_strings_in_flash` uitgecommentarieerd in `basis.yaml`: ESPHome negeert deze optie en wijst hem vanaf 2027.4.0 af.
- README: uitleg over de vertalingen.

## [3.6.10] - 2026-10-29

### Gewijzigd
- **Minimale versies:** Home Assistant en ESPHome minimaal **2026.8**. De firmware wordt gebouwd met ESPHome 2026.8.0.
- Documentatie en CI/CD bijgewerkt voor ESPHome 2026.8.
- **Eltako DSZ15DE-3x80A:** de WSZ15D32A-configuratie en de keuzelijst op de installatiepagina noemen nu ook dit meter-model.
- **Navigatie:** link naar de CI/CD-pagina op alle pagina's van s0tool.nl.

### Toegevoegd
- **Nieuwe CI/CD-pagina** op s0tool.nl, met uitleg over bouwen en releases en de projectbadges.
- **Cyble Sensor V2:** aansluitschema op de pagina *DIY of kopen* (10K-weerstand tussen `GND` en `D2`).
- **kWh-meters:** tabel met bekende S0-meters en uitleg over pulsen per kWh.
- **Utility meters:** uitleg bij problemen oplossen over uur-, dag-, week- en maandverbruik in Home Assistant.
- **Handmatig Wi-Fi instellen** op de installatiepagina, voor wie geen Chrome of Edge heeft (Firefox, Safari, mobiel): verbind met het access point `S0tool` en ga naar `192.168.4.1`.
- **Automatische releases:** er wordt vanzelf een release gemaakt (met tweetalige notities) zodra `project_version` in `basis.yaml` verandert.
