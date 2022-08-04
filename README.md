| Repository Status | ESPHome S0tool discord Community |
| :--- | :--- |
| [![last commit time][github-last-commit]][github-master] [![GitHub Activity][commits-shield]][commits] | [![Discord][discord-shield]][discord] ![Twitter Follow](https://img.shields.io/twitter/follow/huizebruin?style=social) 
|  [![License][license-shield]](LICENSE) [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] | [![Contributors][contributors-shield]][contributors-url] [![GitHub release](https://img.shields.io/github/release/huizebruin/s0tool.svg)](https://GitHub.com/huizebruin/s0tool/releases/)| 


|  S0tool | Made for ESPHome program |
| :--- | :--- |
|  ![S0tool-logo](./static/assets/s0tool-logo.jpg)  | ![ESPHome](./static/assets/made-for-esphome-black-on-white.png) |


|  S0tool | Dashboard  |
| :--- | :--- |
|  ![S0tool-print](./static/assets/s0tool-huizebruin.jpg)  | ![dashboard](./static/assets/s0tool-dashboard.png) |

## Dutch version
For the Dutch version look [Here](./README-nl.md) or on my [website](https://www.huizebruin.nl/home-assistant/wat-is-de-s0tool/) 
 
<br><br>
# How to order the <b>S0tool</b> ?
[https://www.huizebruin.nl/shop](https://www.huizebruin.nl/shop)</br>
At this moment only to : The Netherlands , België and Luxemburg.


# Update:
| Datum | Information |
| :--- | :--- |
| 05/05/2022 | V2 is ready at my home for testing.|
| 06/05/2022 | From now you can flash the  <b>s0tool</b> directly from your browser with a usb micro cable  [https://huizebruin.github.io/s0tool/](https://huizebruin.github.io/s0tool/)
| 25/07/2022 | Watercounter gives now you Liters every 2 seconds a update to Home Assistant.|
| 04/08/2022 | Tekst translate on Github to [English](./README.md) and [Dutch](./README-nl.md).|
<br>

***
<br>

### Software update information at [releases](https://github.com/huizebruin/s0tool/releases) here on Github.
***

# Hardware
Put the sensors ad your 🛒 Look what you need te have te use it.
#
## 5V Power and cable
- Minimal a 5v 1A [Bol.com](https://partner.bol.com/click/click?p=2&t=url&s=1097464&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Funiversal-usb-adapter-usb-stekker-usb-lader-blokje-universeel-zwart%2F9300000030638594%2F&name=Universal%20USB%20adapter%20-%20USB%20stekker%20-%20USB%20lader) 
- usb kabel [Bol.com](https://partner.bol.com/click/click?p=2&t=url&s=1097464&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fzware-kwaliteit-0-3-m-usb-oplaadkabel-oplaadsnoer-kabel-voor-snelladen-past-ook-op-huawei-ascend-3-ideos-x3-mate-10-lite-mate-8-mate-s-p-smart-p10-lite-p8-lite%2F9200000124489693%2F&name=Zware%20kwaliteit%200%2C3%20m%20USB%20oplaadkabel.%20) or [opencircuit.nl](https://opencircuit.nl/product/Micro-USB-kabel-100cm-blauw-30AWG?affiliate=1VL4KIAMBZ)

Or a 5v 2.5A with cable [Opencircuit.nl](https://opencircuit.nl/product/5V-2.5A-Adapter-Micro-USB-B-Raspberry-Pi?affiliate=1VL4KIAMBZ) or at [Bol.com](https://partner.bol.com/click/click?p=2&t=url&s=1097464&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fxssive-usb-lader-met-micro-usb-kabel-voor-motorola-smartphones-o-a-moto-x-moto-g-moto-e-nexus-6%2F9200000055360796%2F&name=Xssive%20USB%20Lader%20met%20Micro%20USB%20Kabel%20).
#
## For the  water counter
-  a NPN sensor - [Aliexpress](https://s.click.aliexpress.com/e/_AaxBxa) or [Aliexpress](https://s.click.aliexpress.com/e/_ADG3ri) or [Aliexpress](https://s.click.aliexpress.com/e/_A4Lsko) or in Nederland at [Opencircuit.nl](https://opencircuit.nl/product/lj18a3-8-z-bx-5v-nabijheids-sensor-n-o-npn-8mm?affiliate=1VL4KIAMBZ)
- (use npn sensor for 5V not that one thats higher than 6V !!)<br> 
I am using the LJ18A3-8-Z/BX-5V <br> ![afbeelding](./static/assets/water-npn.png)<br>

NPN sensor to the S0tool<br>
![watermeteraansluiting](./static/assets/s0tool-watermeter.jpg)<br>

Cyble sensor V2 to the S0tool<br>
![watermeteraansluiting](./static/assets/s0tool-cyble-sensor-v2.jpg)<br>
Here u must add a 10K Ohm resistor between the GND and D2

Soon also a sensor for  Elster V100	kogelvorm meter for the S0tool at my shop.

For More information about the S0tool look at my [Website](https://www.huizebruin.nl/home-assistant/wat-is-de-s0tool/).

***
## For keeping track of solar panels or heat pump etc.
- 45A kWh meter with 1000 pulses at kWh [Bol.com](https://partner.bol.com/click/click?p=2&t=url&s=1097464&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsdm120d-mid-1-fase-kwh-meter-met-puls-uitgang%2F9200000112029366%2F&name=SDM120D%20MID%20-%201%20Fase%20kWh%20meter%20met%20puls%20uitgang)
- 40A kWh meter with 2000 pulses at kWh [Bol.com](https://partner.bol.com/click/click?p=2&t=url&s=1097464&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Felektronische-wattmeter-greenblue-gb173-voor-zowel-prive-als-handel-industrie%2F9200000115897616%2F&name=Elektronische%20wattmeter%20GreenBlue%20GB173) <br>
- 32A kWh meter with 2000 pulses at kWh [Amazon](https://amzn.to/3P6CSg0)
- 40A kWh meter with 1000 pulses at kWh [Amazon](https://amzn.to/3oV08ms)

2000 pulses per kWh are given. This means that each plus has a value of 1/2000 = 0.0005 kWh
1000 pulses per kWh are given. This means that each plus has a value of 1/1000 = 0.001 kWh

2000 imp/kWh : gives 2,000 impulses per kWh. is therefore more accurate to do a measurement than the 1000 imp/KWh
The more energy you consume or supply back, the faster it will switch.<br>


![afbeelding](./static/assets/kwh-s0.png)<br>
#
## The s0 connection <br>
![afbeelding](./static/assets/kwh_Meter_Pulse.jpg)<br>
How to put it to your setup<br>
![afbeelding](./static/assets/s0tool-s0-kwh-poort.jpg)<br>
There is a small error in <b>v1</b>, in the s0 connection is the <b>GND</b> I.P.V <b>5v+</b>.<br>

<br> Since 01-07-2022 only V2 is sent out.
***
<br>

## Installation: 

06/05/2022: <br> Now also possible to flash the <b>s0tool</b> directly via the browser.<br>
Only possible with a chrome or edge and opera browser. <br>
Connect the s0tool to your PC/laptop with a USB cable and start the procedure.
 [https://huizebruin.github.io/s0tool/](https://huizebruin.github.io/s0tool/)

1. Install Home Assistant & Esphome .
2. Connect the wemos d1 mini to a USB charger.
3. Go to <b>ssid:</b> ```S0tool``` & <b> password:</b> ```s0watermeter```
4. Go to ```192.168.4.1```.
5. Put the correct SSID and Password in the fields
6. Wait until it is ready, and then it will indicate the address where it can be found (put it in your router)
7. Go to your Home Assistant installation, it will report that a new device has been connected. And add this.
8. If all goes well, the print will connect to Github to download the latest version, and thereby also add it to Esphome
9. Create a folder in your config folder via explorer and name it ``` utility_meter ``` and put another text file in it and rename it to utility.yaml, and add the code below. And save it (or download it from this repro) and put it in that folder. (Code that is under 10)
10. Add the following code to your
``` configuration.yaml ```
<br> ``` utility_meter: !include utility_meter/utility.yaml ```

``` yaml
#utility_meter:
### watermeter  S0 meter
  waterverbruik_kwartier:
    source: sensor.watermeter_totaal
    cycle: quarter-hourly
  waterverbruik_per_uur:
    source: sensor.watermeter_totaal
    cycle: hourly
enz...
```
Those in the file are in the folder[utility_meter/utility.yaml](https://github.com/huizebruin/s0tool/blob/main/utility_meter/utility.yaml) 

12. Optionally to see if there are new updates, you can create the following sensor in your configuration.yaml:<br>
(or you copy the sensor file from the sensor folder and put it all in your own configuration).
```yaml
#sensor: # get away if this is your first sensor
  - platform: rest
    resource: https://api.github.com/repos/huizebruin/s0tool/releases/latest
    name: s0tool_versie_github
    value_template: '​{{ value_json.tag_name }}​'

```
You can then compare this version with the entity "sensor.s0tool_versie".<br>
These 2 are also in the sensor folder on this Github.

13. Restart Home Assistant one more time to add everything to your Lovelace screen.

14. Add this card to automatically get an update on your dashboard, so you know if you are using the latest version.

``` yaml
type: conditional
conditions:
  - entity: sensor.s0tool_gelijk_github
    state_not: 'True'
card:
  type: markdown
  content: The s0tool is not up to date with the GitHub version.
```
***




## Blueprint for update notifications.
With this you can create an automation that will notify you when a new version is online on Github.
You must have added all the above sensors.
<br>
[![Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fgist.github.com%2Fhuizebruin%2Fcc87171b7974517497fbb55cd4bef83e)


***
## Adjusting the meter reading
To adjust the water meter position:
[![Open your Home Assistant instance and show your service developer tools with a specific service selected.](https://my.home-assistant.io/badges/developer_call_service.svg)](https://my.home-assistant.io/redirect/developer_call_service/?service=ESPHome%3A+s0tool_meterstand_water)
<br><br>
To adjust your kWh meter reading: [![Open your Home Assistant instance and show your service developer tools with a specific service selected.](https://my.home-assistant.io/badges/developer_call_service.svg)](https://my.home-assistant.io/redirect/developer_call_service/?service=ESPHome%3A+s0tool_meterstand_kwh)
<br><br>
Or this option and then search for the right meter and then adjust, <br> here you can update all meter readings:
[![Open your Home Assistant instance and show your service developer tools with a specific service selected.](https://my.home-assistant.io/badges/developer_call_service.svg)](https://my.home-assistant.io/redirect/developer_call_service/?service=Nutsmeter%3A+Calibrate)
<br>

****
## Update function
04-08-2022 : <br> I'm working on a feature to keep this tool always up to date with the latest version on github.

***

Have fun with this tool.<br>
Any additions / improvements <br> may be made via <b>[Pull requests](https://github.com/huizebruin/s0tool/pulls)</b> be supplemented.<br> 
Or via<b>[issues](https://github.com/huizebruin/s0tool/issues) </b> requested or added.
<br><br><b>
Wobbe from Huizebruin.nl</b>
<br><br>
For more information and connection diagrams, etc., take a look at the [website](https://www.huizebruin.nl/home-assistant/wat-is-de-s0tool/).
***

## To cooperate. 
This is an active open source project. <br>
We are always open to people who want to use or contribute to the code. 

Who else is working on this project : <br>
![GitHub contributors](https://img.shields.io/github/contributors/huizebruin/s0tool?style=plastic)<br>
## Collaborators

<!-- readme: collaborators -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/So871">
            <img src="https://avatars.githubusercontent.com/u/45521085?v=4" width="100;" alt="So871"/>
            <br />
            <sub><b>So871</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/huizebruin">
            <img src="https://avatars.githubusercontent.com/u/62996429?v=4" width="100;" alt="huizebruin"/>
            <br />
            <sub><b>Wobbe </b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators -end -->

## Contributors

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/huizebruin">
            <img src="https://avatars.githubusercontent.com/u/62996429?v=4" width="100;" alt="huizebruin"/>
            <br />
            <sub><b>Wobbe </b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/So871">
            <img src="https://avatars.githubusercontent.com/u/45521085?v=4" width="100;" alt="So871"/>
            <br />
            <sub><b>So871</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/TheGabeMan">
            <img src="https://avatars.githubusercontent.com/u/4741637?v=4" width="100;" alt="TheGabeMan"/>
            <br />
            <sub><b>Gabrie Van Zanten</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ImgBotApp">
            <img src="https://avatars.githubusercontent.com/u/31427850?v=4" width="100;" alt="ImgBotApp"/>
            <br />
            <sub><b>Imgbot</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/bas-val">
            <img src="https://avatars.githubusercontent.com/u/77850026?v=4" width="100;" alt="bas-val"/>
            <br />
            <sub><b>Bas-val</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors -end -->

****

## License

MIT License

Copyright (c) 2021 / 2022 Huizebruin.nl

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

***

<a href="https://tc.tradetracker.net/?c=27&amp;m=39668&amp;a=385034&amp;r=&amp;u=" target="_blank" rel="sponsored nofollow">Make money with your site. Start now, sign up here.</a>




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

