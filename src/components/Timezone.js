import React from "react";
import { timezoneNames, ZonedDate } from "@progress/kendo-date-math";
import "@progress/kendo-date-math/tz/all";

const timezones = timezoneNames()
  .filter((l) => l.indexOf("/") > -1)
  .sort((a, b) => a.localeCompare(b));

class Timezone extends React.Component {
  interval;
  state = {
    timezone: "Europe/Sofia",
    date: null,
    result: null
  };

  componentDidMount() {
    this.tick();
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    const date = new Date();
    const result = ZonedDate.fromLocalDate(date, this.state.timezone);
    this.setState({ date, result });
  };

  handleTimezoneChange = (event) => {
    this.setState({ timezone: event.target.value });
    
  };

  

 

  render() {
    const { result, date } = this.state;
    console.log(result);
    return (
      <div>
        <div className="row example-config">
          <div className="col-xs-12 example-col">
            <p>
              Local time in
              <select
                onChange={this.handleTimezoneChange}
                value={this.state.timezone}
              >
                {timezones.map((zone, i) => (
                  <option key={i}>{zone}</option>
                ))}
              </select>
            </p>
            {result && result.toString()}
          </div>
        </div>
      </div>
    );
  }
}

export default Timezone;
