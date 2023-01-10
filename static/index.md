| Repository Status | ESPHome S0tool discord Community |
| :--- | :--- |
| [![last commit time][github-last-commit]][github-master] [![GitHub Activity][commits-shield]][commits] | [![Discord][discord-shield]][discord] ![Twitter Follow](https://img.shields.io/twitter/follow/huizebruin?style=social) 
|  [![License][license-shield]](LICENSE) [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] | [![Contributors][contributors-shield]][contributors-url] [![GitHub release](https://img.shields.io/github/release/huizebruin/s0tool.svg)](https://GitHub.com/huizebruin/s0tool/releases/)| 

# S0tool

|  S0tool | Made for ESPHome program  |
| :--- | :--- |
|  ![S0tool-logo](./assets/s0tool-logo.jpg)  | ![ESPHome](./assets/made-for-esphome-black-on-white.png) |

<br>
With the<b> S0tool</b> you can keep track of the consumption of both your water meter and a kWh meter that has an S0 connection.

The tool is ideal for keeping track of the consumption of devices such as heat pumps, or the yield of your solar panels.
A suitable kWh meter with an S0 connection must be installed for this.

<b>S0tool</b> makes a *(not so)* kwh meter with a s0 port a smart meter, reading the pulse thats from the S0 port that is always present in most cases and it works with [ESPHome][esphome]!<br> And has a official Made for ESPHome licence <br>

![S0tool-and_case](./assets/S0tool_case.jpg) 

## If u cannot buy it u can make it on your own.
You need a couple of thinks<br>
and place a resistor between the D2 and 5V.

Wemos D1 mini ep8266 [Aliexpres](https://s.click.aliexpress.com/e/_9fhHxf) or [Amazon](https://amzn.to/3FL7O48) or dutch webshop [Opencircuit](https://opencircuit.nl/Product/WeMos-D1-mini-V3.1-Wifi-Module?affiliate=1VL4KIAMBZ&cid=github)<br>

Npn Sensor [Aliexpres](https://s.click.aliexpress.com/e/_AVaoGr) or [Amazon](https://amzn.to/3DFVsaL) or dutch webshop [Opencircuit](https://opencircuit.nl/product/lj18a3-8-z-bx-5v-nabijheids-sensor-n-o-npn-8mm?affiliate=1VL4KIAMBZ&cid=github)<br>

10K resistor [Aliexpres](https://s.click.aliexpress.com/e/_A10BHz) or [Amazon](https://amzn.to/3NBjjx2) or dutch webshop [Opencircuit](https://opencircuit.nl/Product/10K%CE%A9-Metaalfilm-weerstand-1-4W-10-stuks?affiliate=1VL4KIAMBZ&cid=github)<br>

And a usb cable and minimal a usb power adapter with 5v and 1A

![S0tool-diy](./assets/npn-watermeter-wemosd1.png)

Will it work with my meter check it out here. https://github.com/huizebruin/s0tool/discussions/57

# Update:

| Datum | Information |
| :----------- | :------- |
| 10/09/2022 | Flash page updated now options --> standard / watermeter / and specials|
| 29/10/2022 | Ad watermeter sensor to energy dashboard.|
| 12/11/2022 | Fix for watermeter total and watermeter meter counter numbers.|
| 14/11/2022 | Fix for watermeter now works with 2 pulses a liter choose 0.0005  and 1 puls a liter choose 0.001 default is 0.001.|
| 18/11/2022 | Fix for meter counter for the kWh and water, and some cleanup of the code.|

<br>

Before update of the S0tool u should use, and above. <br>

| Program | version |
| :---------- | :------- |
| Home Assistant | v2022.11.1 |
| ESPHome | v2022.10.1 |
 

## Watermeter to energy dashboard.
From Home Assistant version 2022.11.X it is possible to add the water meter to the energy dashboard with the S0tool from version v22.10.20.<br>

|  Enegry dashboard | Dashboard  |
| :----- | :----- |
|  ![S0tool-water-energy-dashboard](./assets/water-energydashboard.jpg)  | ![dashboard](./assets/s0tool-dashboard.png) |
<br>
## Installation

first you must have installed the CH340 drivers for the wemos d1 to communicate to your pc / laptop .<br>

Go to this link to install the drivers. 
[https://sparks.gogo.co.nz/ch340.html](https://sparks.gogo.co.nz/ch340.html) <br>
And you must connect the S0tool to your pc of laptop with a cable witch have power and data lines .

You can use the button below to install the <b>S0tool</b> firmware directly to your device via USB from the browser.<br><br>
<b>Works only for a Wemos d1 mini  esp8266 at this moment.</b><br><br>

|  S0tool version   |    Install |    Info  |
| :--------- | :----- | :----- |
|  standard | <esp-web-install-button manifest="./s0tool-standard-manifest.json"></esp-web-install-button> <script type="module" src="https://unpkg.com/esp-web-tools@5.2.0/dist/web/install-button.js?module"></script> |  standard with watermeter and kWh meter |<br><br>
|  S0tool Watermeter | <esp-web-install-button manifest="./s0tool-watermeter-manifest.json"></esp-web-install-button> <script type="module" src="https://unpkg.com/esp-web-tools@5.2.0/dist/web/install-button.js?module"></script> |  only watermeter  |<br><br>
|  S0tool kWh meter | <esp-web-install-button manifest="./s0tool-kwh-puls-manifest.json"></esp-web-install-button> <script type="module" src="https://unpkg.com/esp-web-tools@5.2.0/dist/web/install-button.js?module"></script> |  only kWh meter |<br><br>


***
### Special versions .<br>
Only needed if the kWh counter has a impulslengte other than between the  50 an 100ms on the datasheet.<br>

|  S0tool version   |    Install |    Info  |
| :------------- | :----- | :----------- | 
|  S0tool dsz12d: |  <esp-web-install-button manifest="./s0tool-dsz12d-manifest.json"></esp-web-install-button> <script type="module" src="https://unpkg.com/esp-web-tools@5.2.0/dist/web/install-button.js?module"></script> | special for the dsz12d | <br><br>
|  S0tool lem022sj: |  <esp-web-install-button manifest="./s0tool-lem022sj-manifest.json"></esp-web-install-button> <script type="module" src="https://unpkg.com/esp-web-tools@5.2.0/dist/web/install-button.js?module"></script> | special for the lem022sj 400imp | <br><br>
|  S0tool s0-watermeter: |  <esp-web-install-button manifest="./s0tool-s0-watermeter-manifest.json"></esp-web-install-button> <script type="module" src="https://unpkg.com/esp-web-tools@5.2.0/dist/web/install-button.js?module"></script> | special for the s0-watermeter | <br>
|  S0tool DTS353: |  <esp-web-install-button manifest="./s0tool-DTS353-manifest.json"></esp-web-install-button> <script type="module" src="https://unpkg.com/esp-web-tools@5.2.0/dist/web/install-button.js?module"></script> | special for the DTS353 | <br>

***

For more information about the code etc.
https://github.com/huizebruin/s0tool
<br>
 <br>

Its possible now te adjust the kWh puls rate settings from Home Assistant dashboard an it stays on your setting with reboot and by the update's <br> The combinations are possible between 10 and 4000 puls/kWh with steps by 10.
***

## How to change the total readings
For the water counter: D2 [![Open your Home Assistant instance and show your service developer tools with a specific service selected.](https://my.home-assistant.io/badges/developer_call_service.svg)](https://my.home-assistant.io/redirect/developer_call_service/?service=ESPHome%3A+s0tool_meterstand_water)
<br><br>
For the S0 port of the kwh meter : D5  [![Open your Home Assistant instance and show your service developer tools with a specific service selected.](https://my.home-assistant.io/badges/developer_call_service.svg)](https://my.home-assistant.io/redirect/developer_call_service/?service=ESPHome%3A+s0tool_meterstand_kwh)

Or this one.
[![Open your Home Assistant instance and show your service developer tools with a specific service selected.](https://my.home-assistant.io/badges/developer_call_service.svg)](https://my.home-assistant.io/redirect/developer_call_service/?service=Nutsmeter%3A+Calibrate)
and you can find your readings and reset it. 

***

Have fun with the <b>S0tool</b>.<br>
 <br> For problems or solutions <b>[Pull requests](https://github.com/huizebruin/s0tool/pulls)</b>.<br> 
For problems <b>[issues](https://github.com/huizebruin/s0tool/issues) . </b><br>

 
<br><br><b>
Wobbe From Huizebruin.nl</b>
<br><br>
For more information about the S0tool look at my (Dutch) [website](https://www.huizebruin.nl/home-assistant/wat-is-de-s0tool/).
## License
MIT License

Copyright (c) 2021 / 2022 Huizebruin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

***


[esphome]: https://esphome.io/
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
