| Repository Status | ESPHome S0tool discord Community |
| :--- | :--- |
| [![last commit time][github-last-commit]][github-master] [![GitHub Activity][commits-shield]][commits] | [![Discord][discord-shield]][discord]  
|  [![License][license-shield]](LICENSE) [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] | [![Contributors][contributors-shield]][contributors-url] [![GitHub release](https://img.shields.io/github/release/huizebruin/s0tool.svg)](https://GitHub.com/huizebruin/s0tool/releases/)| 


![S0tool-print](./assets/s0tool-huizebruin.jpg) 
![dashboard](./assets/s0tool-dashboard.jpg)
 
<br>
## De s0tool bestellen?
https://www.huizebruin.nl/s0tool-bestellen/<br>
Ik heb nog een aantal pcb's welke ik kan gaan klaar maken voor verkoop.<br>
En mocht er meer vraag naar zijn ga ik nieuwe printen bestellen.

in <b>v1</b> zit een klein foutje in bij de s0 aansluiting zit de gnd.<br> Dat werkt niet, is een ontwerpfoutje dus dan moet er een kabeltje vanaf de 5v ( bij de watermeter aansluiting) en de andere op de D5 waar s0 poort bij staat.
<br>
# Update <br>
 27-11-2021:<br>
 kwh meters toegevoegd aan deze file. Code toevoegingen gedaan, 
 
 20-11-2021:  
 code bijna zoals ik het hebben wil, totaal kwh meterstand wordt nu nog gereset tijdens update ( flashen). <br> 
 Ben er mee bezig zodat deze behouden blijft.

## Hardware
Vul eerst uw  🛒 of kijk of je de onderstaande componenten al hebt .
### Voor de watermeter
- NPN sensor - [Aliexpress](https://s.click.aliexpress.com/e/_AaxBxa) of [Aliexpress](https://s.click.aliexpress.com/e/_ADG3ri) of [Aliexpress](https://s.click.aliexpress.com/e/_A4Lsko) 
- (Zorg ervoor dat het sensoren voor 5V zijn niet 6V of hoger!!) Ik gebruik zelf de LJ18A3-8-Z/BX-5V <br> ![afbeelding](./assets/water-npn.png)<br><br>
### Voor het bijhouden van zonnepanelen etc.
- kwh meter met 1000 pulsen per kwh [bol.com](https://partner.bol.com/click/click?p=2&t=url&s=1097464&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsdm120d-mid-1-fase-kwh-meter-met-puls-uitgang%2F9200000112029366%2F&name=SDM120D%20MID%20-%201%20Fase%20kWh%20meter%20met%20puls%20uitgang)
- kwh meter met 2000 pulsen per kwh [bol.com](https://partner.bol.com/click/click?p=2&t=url&s=1097464&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Felektronische-wattmeter-greenblue-gb173-voor-zowel-prive-als-handel-industrie%2F9200000115897616%2F&name=Elektronische%20wattmeter%20GreenBlue%20GB173) <br>
![afbeelding](./assets/kwh-s0.png)

<br>
## Installatie: 
1. Installeer Home Assistant & Esphome .
2. connect de wemos d1 mini aan een usblader.
3. ga met je laptop of telefoon naar     <b>ssid:</b> ```S0 & Water Meter``` &   <b> password:</b> ```s0watermeter```
4. ga naar ```192.168.4.1```.
5. zet de juiste SSID en Wachtwoord in de velden
6. wacht tot hij klaar is, en dan geeft hij het adres aan waar hij op te vinden iss ( zet die vast in je router)
7. ga naar je home assistant instalatie, deze zal gaan melden dat er een nieuw device gekoppeld zal zijn. en voeg deze toe.
8. als het goed is gaat de print connectie maken met github om de laatste versie binnen te halen en daardoor ook toe te voegen aan esphome
9. zet het ipadres vast in je router en in de config file binnen esphome. lees de info regels bij de wifi info.
```  dit zijn de hekjes voor de regels 27,28,31,33,35. En plaatst een # voor regel 23 ( doe je deze laatste niet dan komt hij weer online na een reboot of update naar 192.168.4.1 ```
10. voeg de volgende code toe aan je ``` configuration.yaml   ```  ``` utility_meter: !include utility_meter/utility.yaml ```
11. maak een map aan in je config map via de verkenner en noem deze ``` utiliy_meter ``` en plaats daar weer een tekst bestand in en hernoem deze naar utility.yaml en voeg onderstaande code daar in en sla deze op( of download hem uit deze repro) en plaats hem in die map.

```
#utility_meter:
### watermeter  S0 meter
  waterverbruik_kwartier:
    source: sensor.watermeter_totaal
    cycle: quarter-hourly
  waterverbruik_per_uur:
    source: sensor.watermeter_totaal
    cycle: hourly
  waterverbruik_per_dag:
    source: sensor.watermeter_totaal
    cycle: daily    
  waterverbruik_per_week:
    source: sensor.watermeter_totaal
    cycle: weekly
  waterverbruik_per_maand:
    source: sensor.watermeter_totaal
    cycle: monthly
  waterverbruik_per_kwartaal:
    source: sensor.watermeter_totaal
    cycle: quarterly
  waterverbruik_per_jaar:
    source: sensor.watermeter_totaal
    cycle: yearly   
### zonnepanelen S0 meter
  zonnepanelen_kwartier:
    source: sensor.actuele_vermogen
    cycle: quarter-hourly
  zonnepanelen_per_uur:
    source: sensor.actuele_vermogen
    cycle: hourly
  zonnepanelen_per_dag:
    source: sensor.actuele_vermogen
    cycle: daily
  zonnepanelen_per_week:
    source: sensor.actuele_vermogen
    cycle: weekly
  zonnepanelen_per_maand:
    source: sensor.actuele_vermogen
    cycle: monthly 
  zonnepanelen_per_kwartaal:
    source: sensor.actuele_vermogen
    cycle: quarterly
  zonnepanelen_per_jaar:
    source: sensor.actuele_vermogen
    cycle: yearly   
```

12. Restart Home Assistant one final time.






[commits-shield]: https://img.shields.io/github/commit-activity/m/huizebruin/s0tool.svg
[commits]: https://github.com/huizebruin/s0tool/commits/main
[github-last-commit]: https://img.shields.io/github/last-commit/huizebruin/s0tool.svg?style=plasticr
[github-master]: https://github.com/huizebruin/s0tool/commits/main
[license-shield]: https://img.shields.io/github/license/huizebruin/s0tool.svg
[discord-shield]: https://img.shields.io/discord/723629686093119650.svg?logo=discord&color=7289da
[discord]: https://discord.gg/bN8rC7gEng
[contributors-url]: https://github.com/huizebruin/s0tool/graphs/contributors
[contributors-shield]: https://img.shields.io/github/contributors/huizebruin/s0tool.svg
[forks-shield]: https://img.shields.io/github/forks/huizebruin/s0tool.svg
[forks-url]: https://github.com/huizebruin/s0tool/network/members
[stars-shield]: https://img.shields.io/github/stars/huizebruin/s0tool.svg
[stars-url]: https://github.com/huizebruin/s0tool/stargazers
[issues-shield]: https://img.shields.io/github/issues/huizebruin/s0tool.svg
[issues-url]: https://github.com/huizebruin/s0tool/issues
