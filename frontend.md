# Frontend Example
so en watermeter print:

![watermeter](./watermeter.png) 
```
- type: markdown
  card_mod:
    style:
      ha-markdown$: |
        * {
          font-family: FormulaOne, "Titillium Web";
        }
  content: >-
    {% set nr = states.sensor.formula_one_sensor.attributes.next_race %}
    {% if not(nr == None) %} 
    <h1><img height="22" src="https://www.countries-ofthe-world.com/flags-normal/flag-of-{{nr.Circuit.Location.country}}.png">&nbsp;
    {{ nr.raceName }}</h1>

    <small>{{ as_timestamp(nr.date + ' ' + nr.time) | timestamp_custom("%Y-%m-%d %H:%M") }}</small>

    <a target="_new" href="{{nr.Circuit.url}}">
      <img width="100%" src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/{{nr.Circuit.Location.country}}%20carbon.png.transform/4col/image.png">
    </a>
    {{nr.Circuit.circuitName}}
    {% endif %}
```

S0 kwh meter:

![s0meter](./s0meter.png)
```
type: markdown
card_mod:
  style:
    ha-markdown$: |
      table {
        width: 100%;
        border-spacing: 0;
        border-collapse: separate;
      }
      th {
        color: white;
        background: black;
      }
      tr:nth-child(even) {
        background-color: #dddddd;
        color: rgb(33,33,33);
      }
      td:nth-child(1) {
        width: 50px;
        text-align: center;
      }
      td:nth-child(2) {
        width: 50px;
        text-align: center;
      }
      td:nth-child(4) {
        width: 60px;
        text-align: center;
      }
content: |-
  <table>
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th colspan="2">Drivers</th>
        <th class="center">Pts</th>
      </tr>
    </thead>
    <tbody>
  {% for driver in states.sensor.formula_one_sensor.attributes.drivers %} <tr>
          <td>{{driver.position}}</td>
          <td>{{driver.Driver.code}}</td>
          <td>{{driver.Driver.givenName }} {{driver.Driver.familyName }}</td>
          <td>{{driver.points}}</td>
      </tr>
  {% endfor %}
    </tbody>
  </table>
```

Complete print info

![Constructor standings](./constructor_standings.png)
```
type: markdown
card_mod:
  style:
    ha-markdown$: |
      table {
        width: 100%;
        border-spacing: 0;
        border-collapse: separate;
      }
      th {
        color: white;
        background: black;
      }
      tr:nth-child(even) {
        background-color: #dddddd;;
        color: rgb(33,33,33);
      }
      td:nth-child(1) {
        width: 50px;
        text-align: center;
      }
      td:nth-child(2) {
        text-align: left;
      }
      td:nth-child(3) {
        width: 60px;
        text-align: center;
      }
content: |-
  <table>
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Constructor</th>
        <th class="center">Pts</th>
      </tr>
    </thead>
    <tbody>
  {% for driver in states.sensor.formula_one_sensor.attributes.constructors %} <tr>
          <td>{{driver.position}}</td>
          <td>{{driver.Constructor.name }}</td>
          <td>{{driver.points}}</td>
      </tr>
  {% endfor %}
    </tbody>
  </table>
```
