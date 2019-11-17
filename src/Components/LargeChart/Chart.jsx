import React, { Component } from "react";
import ReactFlot from "react-flot";
import '../../../node_modules/react-flot/flot/jquery.flot.time';

import LargeChart from './LargeChart';

import { Select, Card } from "antd";

const { Option } = Select;
const provinceData = ["PageViews", "Session"];
const cityData = {
  PageViews: [
    "Total PageViews",
    "Estimated EU Revenue",
    "Non-EU Pageviews",
    "EU Pageviews",
    "Previously Consented",
    "Shown & Consented",
    "Shown & Not Consented",
    "GDPR Popup CTR"
  ],
  Session: [
    "Total Sessions",
    "Estimated EU Revenue",
    "Non-EU Sessions",
    "EU Sessions",
    "Previously Consented",
    "Shown & Consented",
    "Shown & Not Consented",
    "GDPR Popup CTR"
  ]
};
const currency = ["USD", "EUR", "CAD"];

class DataChart extends Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
    currency: currency[0]
  };

  handleProvinceChange = value => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0]
    });
  };

  onSecondCityChange = value => {
    this.setState({
      secondCity: value
    });
  };

  getYDimensions = data => {
    const yAxis = data.map(c => c[1]);
    const max = Math.max(...yAxis) * 1.20;
    // const min = Math.min(...yAxis);
    return { max, min: 0 };
  }

  render() {
    const { cities } = this.state;

    return (
      <div>
        <div className="matric-select">
          <span>Metric</span>
          <Select
            defaultValue={provinceData[0]}
            style={{ width: 125, margin: '0 20px 0 10px' }}
            onChange={this.handleProvinceChange}
          >
            {provinceData.map(province => (
              <Option key={province}>{province}</Option>
            ))}
          </Select>
          <span>Sub-Metric</span>
          <Select
            style={{ width: 175, margin: '0 20px 0 10px'  }}
            value={this.state.secondCity}
            onChange={this.onSecondCityChange}
          >
            {cities.map(city => (
              <Option key={city}>{city}</Option>
            ))}
          </Select>
          <span>Currency</span>
          <Select style={{ width: 75, margin: '0 20px 0 10px' }} value={this.state.currency}>
            {currency.map(currency => (
              <Option key={currency}>{currency}</Option>
            ))}
          </Select>
        </div>
        <Card style={{ borderRadius: '5px' }}>
          <LargeChart
            data={this.props.data}
            selectedMetric={this.props.selectedMetric}
          />
        </Card>
      </div>
    );
  }
}

export default DataChart;
