import React, { Component } from "react";
import ReactFlot from "react-flot";
import { Select } from "antd";

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

  renderChart = () => {
    const data = this.getData();
    console.log(data);
    const options = {
      // yaxis: { max: 1 },
      series: {
        lines: { show: true },
        points: { show: true }
      }
    };

    return (
      <ReactFlot
        id="product-chart"
        options={options}
        data={data}
        width="50%"
        height="100px"
      />
    );
  };

  getData = () => {
    const { selectedProp, data } = this.props;
    return data.map(d => [d.date, d[selectedProp]]);
  };

  render() {
    const { cities } = this.state;

    // return <div>{this.renderChart()}</div>;
    return (
      <div className="matric-select">
        <span>Metric</span>
        <Select
          defaultValue={provinceData[0]}
          style={{ width: 150 }}
          onChange={this.handleProvinceChange}
        >
          {provinceData.map(province => (
            <Option key={province}>{province}</Option>
          ))}
        </Select>
        <span>Sub-Metric</span>
        <Select
          style={{ width: 200 }}
          value={this.state.secondCity}
          onChange={this.onSecondCityChange}
        >
          {cities.map(city => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
        <span>Currency</span>
        <Select style={{ width: 200 }} value={this.state.currency}>
          {currency.map(currency => (
            <Option key={currency}>{currency}</Option>
          ))}
        </Select>
      </div>
    );
  }
}

export default DataChart;
