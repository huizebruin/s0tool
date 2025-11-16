<div align="center">

# S0tool

![S0tool Logo](./static/assets/s0tool-logo.jpg)

**Monitor your water and energy consumption with Home Assistant and ESPHome**

[![last commit time][github-last-commit]][github-master]
[![GitHub Activity][commits-shield]][commits]
[![License][license-shield]](LICENSE)
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]
[![GitHub release](https://img.shields.io/github/release/huizebruin/s0tool.svg)](https://GitHub.com/huizebruin/s0tool/releases)
[![Discord][discord-shield]][discord]
![Twitter Follow](https://img.shields.io/twitter/follow/huizebruin?style=social)

[![Made for ESPHome](https://img.shields.io/badge/Made_for-ESPHome-black?logo=esphome)](https://esphome.io)

![Made for ESPHome](./static/assets/made-for-esphome-black-on-white.png)

[Website](https://s0tool.nl) • [Documentation](https://www.huizebruin.nl/home-assistant/wat-is-de-s0tool/) • [Shop](https://www.huizebruin.nl/shop) • [Discord](https://discord.gg/AskpfnY)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Hardware Requirements](#-hardware-requirements)
- [DIY Build](#-diy-build)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Compatible Devices](#-compatible-devices)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Support](#-support)
- [License](#-license)

---

## 🌟 Overview

The **S0tool** is an ESPHome-based device that transforms regular water and energy meters into smart meters. Seamlessly integrate with Home Assistant to monitor real-time consumption and optimize your usage.

| S0tool Device | Home Assistant Dashboard |
|:---:|:---:|
| ![S0tool Device](./static/assets/s0tool-huizebruin.jpg) | ![Dashboard](./static/assets/s0tool-dashboard.png) |

### 📰 Latest Updates

**🎉 New Website Available!** (June 24, 2024)
Visit [https://s0tool.nl](https://s0tool.nl) for complete documentation and guides.

**🇳🇱 Dutch Version**
Voor de Nederlandse versie, bezoek [Huizebruin.nl](https://www.huizebruin.nl/home-assistant/wat-is-de-s0tool/)

---

## ✨ Features

- 💧 **Water Meter Monitoring** - Track water consumption in real-time
- ⚡ **Energy Meter Support** - Monitor kWh usage from S0 pulse outputs
- 🏠 **Home Assistant Integration** - Native ESPHome integration with auto-discovery
- 📊 **Energy Dashboard Compatible** - Display data in HA Energy Dashboard (v2022.11+)
- 🔄 **OTA Updates** - Update firmware wirelessly through ESPHome
- 🌐 **Easy Web Installation** - Flash firmware directly from your browser
- 📱 **Real-time Monitoring** - Instant updates on consumption
- 🎯 **Multiple Meter Support** - Connect both water and energy meters simultaneously

---

## 🚀 Quick Start

### Requirements

| Software | Minimum Version |
|:---|:---:|
| Home Assistant | v2025.1.0+ |
| ESPHome | v2024.12.0+ |

**Specifications:**
- Wi-Fi: IEEE 802.11 b/g/n 2.4GHz
- Compatible with: Wemos D1 Mini V1 or V3.0 ESP8266
- Power: USB 5V, 1A minimum

### Installation Methods

**🌐 Browser Installation (Recommended)**

1. Visit [https://s0tool.nl](https://s0tool.nl)
2. Connect your S0tool via USB
3. Click "Install" and follow the wizard
4. Compatible with Chrome, Edge, and Opera browsers

**🏠 Home Assistant Auto-Discovery**

After connecting to Wi-Fi, the S0tool will automatically appear in Home Assistant under **Settings → Devices & Services**.

---

## 🛠 Hardware Requirements

### Option 1: Purchase Pre-Built

**[Order from Huizebruin Shop](https://www.huizebruin.nl/shop)**
🚚 Currently shipping to: The Netherlands and Belgium

### Option 2: DIY Build

**Components Needed:**

| Component | Where to Buy |
|:---|:---|
| **Wemos D1 Mini ESP8266** | [AliExpress](https://s.click.aliexpress.com/e/_9fhHxf) • [Amazon](https://amzn.to/3FL7O48) • [Opencircuit](https://opencircuit.nl/Product/WeMos-D1-mini-V3.1-Wifi-Module?affiliate=1VL4KIAMBZ&cid=github) |
| **NPN Sensor (5V)** | [AliExpress](https://s.click.aliexpress.com/e/_AVaoGr) • [Amazon](https://amzn.to/3DFVsaL) • [Opencircuit](https://opencircuit.nl/product/lj18a3-8-z-bx-5v-nabijheids-sensor-n-o-npn-8mm?affiliate=1VL4KIAMBZ&cid=github) |
| **10K Resistor** | [AliExpress](https://s.click.aliexpress.com/e/_A10BHz) • [Amazon](https://amzn.to/3NBjjx2) • [Opencircuit](https://opencircuit.nl/Product/10K%CE%A9-Metaalfilm-weerstand-1-4W-10-stuks?affiliate=1VL4KIAMBZ&cid=github) |
| **USB Cable & 5V Power Adapter** | [Bol.com](https://partner.bol.com/click/click?p=2&t=url&s=1097464&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Funiversal-usb-adapter-usb-stekker-usb-lader-blokje-universeel-zwart%2F9300000030638594%2F&name=Universal%20USB%20adapter) • [Opencircuit](https://opencircuit.nl/product/5V-2.5A-Adapter-Micro-USB-B-Raspberry-Pi?affiliate=1VL4KIAMBZ&cid=github) |

---

## 🔧 DIY Build

### Wiring Diagram

![DIY Wiring](./static/assets/npn-watermeter-wemosd1.png)

### Connection Steps

1. Connect 10K resistor between **5V** and **D2** pins
2. Connect **D2** to NPN sensor signal wire
3. Connect NPN sensor **GND** to Wemos **GND**
4. Connect NPN sensor **5V** to Wemos **5V**

**⚠️ Important:** Use NPN sensors rated for 5V only (not higher than 6V)
**Recommended Sensor:** LJ18A3-8-Z/BX-5V

### Sensor Connection Examples

**Standard NPN Sensor Connection:**

![NPN Connection](./static/assets/s0tool-watermeter.jpg)

**Cyble Sensor V2 Connection:**

![Cyble Connection](./static/assets/s0tool-cyble-sensor-v2.jpg)
*Note: Requires 10K resistor between GND and D2*

### Meter Compatibility

**💧 Check if your water meter is compatible:**
[View Compatibility List](https://github.com/huizebruin/s0tool/discussions/57)

---

## 📥 Installation

### Step 1: Install USB Drivers

First, install the CH340 drivers for communication:
[Download CH340 Drivers](https://sparks.gogo.co.nz/ch340.html)

### Step 2: Flash Firmware

**Browser Method (Easiest):**
1. Visit [https://s0tool.nl](https://s0tool.nl)
2. Connect S0tool to your PC via USB
3. Select configuration type
4. Click "Install" and follow prompts

**Manual Method:**
1. Install Home Assistant & ESPHome
2. Connect Wemos D1 Mini via USB
3. Access Wi-Fi: `S0tool`
4. Navigate to: `192.168.4.1`
5. Enter your Wi-Fi credentials
6. Wait for device to connect
7. Add device in Home Assistant

### Step 3: Add to Home Assistant

The S0tool will automatically appear in:
**Settings → Devices & Services → ESPHome**

Click "Configure" to complete setup.

---

## ⚙️ Configuration

### Home Assistant Utility Meters

**1. Create utility meter configuration:**

Create folder: `config/utility_meter/`

Create file: `utility.yaml`

```yaml
utility_meter:
  # Water meter tracking
  waterverbruik_kwartier:
    source: sensor.watermeter_totaal
    cycle: quarter-hourly
  waterverbruik_per_uur:
    source: sensor.watermeter_totaal
    cycle: hourly
  waterverbruik_dag:
    source: sensor.watermeter_totaal
    cycle: daily
  waterverbruik_week:
    source: sensor.watermeter_totaal
    cycle: weekly
  waterverbruik_maand:
    source: sensor.watermeter_totaal
    cycle: monthly
```

**2. Include in configuration.yaml:**

```yaml
utility_meter: !include utility_meter/utility.yaml
```

[📁 View Complete Utility Meter Config](https://github.com/huizebruin/s0tool/blob/main/utility_meter/utility.yaml)

### Update Notifications

**Enable automatic update checks:**

```yaml
homeassistant:
  packages: !include_dir_merge_named packages/
```

Create `packages/s0tool.yaml`:

```yaml
sensor:
  - platform: rest
    resource: https://api.github.com/repos/huizebruin/s0tool/releases/latest
    name: s0tool_version_github
    unique_id: s0tool_github_version
    value_template: '{{ value_json.tag_name }}'
    scan_interval: 3600

template:
  - binary_sensor:
      - name: "S0Tool update online"
        unique_id: s0tool_up_to_date
        state: >
          {% set a = states('sensor.s0tool_versie_github') %}
          {% set b = states('sensor.s0tool_versie') %}
          {{ version(a) > version(b) }}
        device_class: update
```

**Dashboard Update Card:**

```yaml
type: conditional
conditions:
  - entity: sensor.s0tool_up_to_date
    state_not: 'True'
card:
  type: markdown
  content: The S0tool is not up to date with the GitHub version.
```

### Automation Blueprint

[![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fgist.github.com%2Fhuizebruin%2Fcc87171b7974517497fbb55cd4bef83e)

Get notified when new versions are available!

---

## 💧 Energy Dashboard Integration

From Home Assistant v2022.11.X, water meters can be added to the Energy Dashboard!

| Energy Dashboard | S0tool Dashboard |
|:---:|:---:|
| ![Water Energy Dashboard](./static/assets/water-energydashboard.jpg) | ![S0tool Dashboard](./static/assets/s0tool-dashboard.jpg) |

### Adding to Energy Dashboard

[![Open Energy Dashboard](https://my.home-assistant.io/badges/config_energy.svg)](https://my.home-assistant.io/redirect/config_energy/)

1. Go to **Settings → Dashboards → Energy**
2. Add water meter: Look for `watermeter stand`
3. Add S0 port: Look for `Totaal opgebracht`

---

## ⚡ Energy Meter Support

### Compatible kWh Meters

Perfect for monitoring:
- 🌞 Solar panels
- 🔥 Heat pumps
- ⚡ Energy consumption
- 🏭 Any device with S0 pulse output

### S0 Pulse Meters

| Rating | Pulse Rate | Sources |
|:---|:---:|:---|
| 45A kWh Meter | 1000 imp/kWh | [Bol.com](https://partner.bol.com/click/click?p=2&t=url&s=1097464&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsdm120d-mid-1-fase-kwh-meter-met-puls-uitgang%2F9200000112029366%2F&name=SDM120D%20MID) |
| 40A kWh Meter | 2000 imp/kWh | [Bol.com](https://partner.bol.com/click/click?p=2&t=url&s=1097464&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Felektronische-wattmeter-greenblue-gb173-voor-zowel-prive-als-handel-industrie%2F9200000115897616%2F&name=Elektronische%20wattmeter%20GreenBlue%20GB173) |
| 32A kWh Meter | 2000 imp/kWh | [Amazon](https://amzn.to/3P6CSg0) |
| 40A kWh Meter | 1000 imp/kWh | [Amazon](https://amzn.to/3oV08ms) |

**Understanding Pulse Rates:**
- 2000 imp/kWh = 0.0005 kWh per pulse (more accurate)
- 1000 imp/kWh = 0.001 kWh per pulse

### S0 Connection Diagrams

![S0 Connection](./static/assets/kwh-s0.png)

![S0 Wiring](./static/assets/kwh_Meter_Pulse.jpg)

![S0 Setup](./static/assets/s0tool-s0-kwh-poort.jpg)

---

## 📋 Compatible Devices

### Water Meters

Check compatibility: [GitHub Discussion #57](https://github.com/huizebruin/s0tool/discussions/57)

**Confirmed Compatible:**

| Brand | Model | Location |
|:---|:---|:---:|
| Elster | V200 | NL |
| Itron | Aquadis+ | NL |
| Sensus | 620 | NL |
| Maddalena | CD SD Plus | BE |
| Actaris | Single-Jet | NL |
| Zenner | MNK-RP-N | DE |
| Kamstrup | Multical 21 | EU |
| Diehl | Hydrus | EU |

### Power Meters (S0 Output)

Check compatibility: [GitHub Discussion #250](https://github.com/huizebruin/s0tool/discussions/250)

---

## 🔧 Adjusting Meter Readings

### Water Meter

[![Adjust Water Meter](https://my.home-assistant.io/badges/developer_call_service.svg)](https://my.home-assistant.io/redirect/developer_call_service/?service=ESPHome%3A+s0tool_meterstand_water)

### kWh Meter

[![Adjust kWh Meter](https://my.home-assistant.io/badges/developer_call_service.svg)](https://my.home-assistant.io/redirect/developer_call_service/?service=ESPHome%3A+s0tool_meterstand_kwh)

### All Meters

[![Calibrate All Meters](https://my.home-assistant.io/badges/developer_call_service.svg)](https://my.home-assistant.io/redirect/developer_call_service/?service=Nutsmeter%3A+Calibrate)

---

## 🔄 Updates

### Via ESPHome Dashboard

1. Open ESPHome in Home Assistant
2. Find your S0tool device
3. Click the three dots (⋮)
4. Select "Validate" → "Install"

**Latest releases:** [GitHub Releases](https://github.com/huizebruin/s0tool/releases)

---

## 🐛 Troubleshooting

### USB Serial Drivers

If the serial port doesn't appear, install the appropriate driver:

| Chip | Driver |
|:---|:---|
| **CP2102** (square chip) | [Download](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) |
| **CH341** | [Download](https://github.com/nodemcu/nodemcu-devkit/tree/master/Drivers) |
| **CH340** | [Download](https://sparks.gogo.co.nz/ch340.html) |

### Common Issues

**Device not connecting to Wi-Fi:**
- Ensure you're using 2.4GHz Wi-Fi (5GHz not supported)
- Check SSID and password are correct
- Try holding the boot button during flash

**Meter readings not updating:**
- Verify sensor is properly aligned with meter
- Check wiring connections
- Ensure 10K resistor is installed correctly

**More Help:**
- 📖 [Full Documentation](https://www.huizebruin.nl/home-assistant/wat-is-de-s0tool/)
- 💬 [Discord Community](https://discord.gg/AskpfnY)
- 🐛 [Report Issues](https://github.com/huizebruin/s0tool/issues)

---

## 🤝 Contributing

We welcome contributions of all kinds! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Ways to Contribute

- 🐛 Report bugs via [Issues](https://github.com/huizebruin/s0tool/issues)
- 💡 Suggest features or improvements
- 🔧 Submit [Pull Requests](https://github.com/huizebruin/s0tool/pulls)
- 📝 Improve documentation
- 🌟 Star this repository!

### Contributors

![GitHub contributors](https://img.shields.io/github/contributors/huizebruin/s0tool?style=plastic)

This project is made possible by our amazing [contributors](https://github.com/huizebruin/s0tool/graphs/contributors)!

---

## 💖 Support

Enjoying the S0tool? Consider supporting development:

[![PayPal](https://img.shields.io/badge/send%20me%20a%20small%20gift-paypal-blue.svg?style=flat-square)](https://paypal.me/huizebruin)
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W4QU9ZX)

**Other ways to support:**
- 🌟 Star this repository
- 📢 Share with others
- 💬 Join our Dutch [Discord](https://discord.gg/AskpfnY)

---

## 📄 License

MIT License

Copyright (c) 2021 - 2025 Huizebruin.nl / S0tool.nl

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## 🙏 Credits

**Created by:** Wobbe
**From:** [Huizebruin.nl](https://www.huizebruin.nl) & [S0tool.nl](https://s0tool.nl)

**Powered by:** [ESPHome](https://esphome.io) & [ESP Web Tools](https://esphome.github.io/esp-web-tools/)

---

<div align="center">

**[Website](https://s0tool.nl)** • **[Documentation](https://www.huizebruin.nl/home-assistant/wat-is-de-s0tool/)** • **[Shop](https://www.huizebruin.nl/shop)** • **[Discord](https://discord.gg/AskpfnY)**

Made with ❤️ for the Home Assistant community

</div>

<!-- Badge Links -->
[commits-shield]: https://img.shields.io/github/commit-activity/m/huizebruin/s0tool.svg
[commits]: https://github.com/huizebruin/s0tool/commits/main
[github-last-commit]: https://img.shields.io/github/last-commit/huizebruin/s0tool.svg?style=plastic
[github-master]: https://github.com/huizebruin/s0tool/commits/main
[license-shield]: https://img.shields.io/github/license/huizebruin/s0tool.svg
[discord-shield]: https://img.shields.io/discord/723629686093119650.svg?logo=discord&color=7289da
[discord]: https://discord.gg/AskpfnY
[contributors-url]: https://github.com/huizebruin/s0tool/graphs/contributors
[contributors-shield]: https://img.shields.io/github/contributors/huizebruin/s0tool.svg
[forks-shield]: https://img.shields.io/github/forks/huizebruin/s0tool.svg
[forks-url]: https://github.com/huizebruin/s0tool/network/members
[stars-shield]: https://img.shields.io/github/stars/huizebruin/s0tool.svg
[stars-url]: https://github.com/huizebruin/s0tool/stargazers
[issues-shield]: https://img.shields.io/github/issues/huizebruin/s0tool.svg
[issues-url]: https://github.com/huizebruin/s0tool/issues
