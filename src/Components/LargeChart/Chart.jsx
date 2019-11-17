import React, { Component } from "react";
import '../../../node_modules/react-flot/flot/jquery.flot.time';

import LargeChart from './LargeChart';

import { Select, Card } from "antd";

const { Option } = Select;
const metricData = {
  PageViews: [
    {key: 'totalPageView', value: "Total PageViews" },
    {key: 'estimatedEuRevinew', value: "Estimated EU Revenue" },
    {key: 'nonEuPageviews', value: "Non-EU Pageviews" },
    {key: 'euPageviews', value: "EU Pageviews" },
    {key: 'priviouslyConsented', value: "Previously Consented" },
    {key: 'shownAndConsented', value: "Shown & Consented" },
    {key: 'shownAndNonConsented', value: "Shown & Not Consented" },
    {key: 'gdprPopupCtr', value: "GDPR Popup CTR" },
  ],
  Session: [
    {key: 'totalPageView', value: "Total Sessions" },
    {key: 'estimatedEuRevinew', value: "Estimated EU Revenue" },
    {key: 'nonEuPageviews', value: "Non-EU Sessions" },
    {key: 'euPageviews', value: "EU Sessions" },
    {key: 'priviouslyConsented', value: "Previously Consented" },
    {key: 'shownAndConsented', value: "Shown & Consented" },
    {key: 'shownAndNonConsented', value: "Shown & Not Consented" },
    {key: 'gdprPopupCtr', value: "GDPR Popup CTR" },
  ]
};
const currency = [{key: "USD", value: "USD" }, {key: "EUR", value: "EUR" }, { key: "CAD", value: "CAD" }];

class DataChart extends Component {
  state = {
    selectedMetric: Object.keys(metricData)[0],
    selectedSubmetric:  metricData[Object.keys(metricData)[0]][0].key,
    selectedCurrency: currency[0].key,
  };

  handleMetricChange = value => {
    this.setState({ selectedMetric: value });
  };

  handleCurrencyChange = value => {
    this.setState({ selectedCurrency: value });
  };

  handleSubmetricChange = value => {
    this.setState({ selectedSubmetric: value });
    this.props.setSelectedMetric(value);
  };

  render() {
    const { selectedMetric, selectedSubmetric, selectedCurrency } = this.state;

    return (
      <div>
        <div className="matric-select">
          <span>Metric</span>
          <Select
            defaultValue={Object.keys(metricData)[0]}
            style={{ width: 125, margin: '0 20px 0 10px' }}
            onChange={this.handleMetricChange}
          >
            {Object.keys(metricData).map(province => (
              <Option key={province}>{province}</Option>
            ))}
          </Select>
          <span>Sub-Metric</span>
          <Select
            style={{ width: 175, margin: '0 20px 0 10px'  }}
            value={selectedSubmetric}
            onChange={this.handleSubmetricChange}
          >
            {metricData[selectedMetric].map(submetric => (
              <Option key={submetric.key}>{submetric.value}</Option>
            ))}
          </Select>
          <span>Currency</span>
          <Select
            style={{ width: 75, margin: '0 20px 0 10px' }}
            value={selectedCurrency}
            onChange={this.handleCurrencyChange}
          >
            {currency.map(currency => (
              <Option key={currency.key}>{currency.value}</Option>
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
