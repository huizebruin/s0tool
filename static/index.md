| Repository Status | ESPHome S0tool discord Community |
| :--- | :--- |
| [![last commit time][github-last-commit]][github-master] [![GitHub Activity][commits-shield]][commits] | [![Discord][discord-shield]][discord] ![Twitter Follow](https://img.shields.io/twitter/follow/huizebruin?style=social) 
|  [![License][license-shield]](LICENSE) [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] | [![Contributors][contributors-shield]][contributors-url] [![GitHub release](https://img.shields.io/github/release/huizebruin/s0tool.svg)](https://GitHub.com/huizebruin/s0tool/releases/)| 

# S0tool

<p align="center">
  <img width="40%" src="./assets/s0tool-logo.jpg">
</p>
Update : v2022-05-05-20:30<br><br>
With the S0tool you can keep track of the consumption of both your water meter and a kWh meter that has an S0 connection.

The tool is ideal for keeping track of the consumption of devices such as heat pumps, or the yield of your solar panels.
A suitable kWh meter with an S0 connection must be installed for this.

S0tool makes a *(not so)* kwh meter with a s0 port a smart meter, reading the pulse thats from the S0 port that is always present in most cases and it works with [ESPHome][esphome]! <br>
a case has been designed that you can 3D print yourself, its work in progres.

## Installation

You can use the button below to install the S0tool firmware directly to your device via USB from the browser.
<br><br>| Clean install:|  <esp-web-install-button manifest="./manifest.json"></esp-web-install-button>
<script type="module" src="https://unpkg.com/esp-web-tools@5.2.0/dist/web/install-button.js?module"></script> wipes the wemos completely. <br> <br>
| Update: |            <esp-web-install-button manifest="./manifest1.json"></esp-web-install-button>
<script type="module" src="https://unpkg.com/esp-web-tools@5.2.0/dist/web/install-button.js?module"></script> keep the WiFi settings on it.
 <br>


***

## How to change the total readings
For the water counter: D2 [![Open your Home Assistant instance and show your service developer tools with a specific service selected.](https://my.home-assistant.io/badges/developer_call_service.svg)](https://my.home-assistant.io/redirect/developer_call_service/?service=ESPHome%3A+s0tool_meterstand_water)
<br><br>
For the S0 port of the kwh meter : D5  [![Open your Home Assistant instance and show your service developer tools with a specific service selected.](https://my.home-assistant.io/badges/developer_call_service.svg)](https://my.home-assistant.io/redirect/developer_call_service/?service=ESPHome%3A+s0tool_meterstand_kwh)

***

Have fun whit the S0tool.<br>
 <br> For problems or solutions <b>[Pull requests](https://github.com/huizebruin/s0tool/pulls)</b>.<br> 
For problems <b>[issues](https://github.com/huizebruin/s0tool/issues) </b> .
<br><br><b>
Wobbe From Huizebruin.nl</b>
<br><br>



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