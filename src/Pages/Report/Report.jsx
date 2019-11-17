import React, { Component } from "react";

import Title from "../../Components/Title/Title";
import Toolbar from "../../Components/Toolbar/Toolbar";
import Overview from "../../Components/Overview/Overview";
import Chart from "../../Components/LargeChart/Chart";
import DetailTable from "../../Components/DetailTable/DetailTable";

import data from "./demoData";

import { Layout } from "antd";

const { Content } = Layout;

class Report extends Component {
  state = {
    data,
    selectedMetric: "totalPageView",
    selectedCurrency: "USD",
  };

  setSelectedMetric = selectedMetric => this.setState({ selectedMetric });

  convertSingleValue = value => {
    switch (this.state.selectedCurrency) {
      case "USD": return value;
      case "EUR": return value * 1.25;
      case "CAD": return value * 0.75;
      default: return value;
    }
  }

  convertDataset = data => {
    return data.map(({ estimatedEuRevinew, ...rest }) => ({ ...rest, estimatedEuRevinew: this.convertSingleValue(estimatedEuRevinew) }));
  }

  render() {
    return (
      <div>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <div>
              <Title />
              <Toolbar
                data={this.convertDataset(this.state.data)}
                selectedMetric={this.state.selectedMetric}
                selectedCurrency={this.state.selectedCurrency}
              />
              <Overview
                data={this.convertDataset(this.state.data)}
                selectedMetric={this.state.selectedMetric}
                setSelectedMetric={this.setSelectedMetric}
                selectedCurrency={this.state.selectedCurrency}
              />
              <Chart
                data={this.convertDataset(this.state.data)}
                selectedMetric={this.state.selectedMetric}
                setSelectedMetric={this.setSelectedMetric}
                selectedCurrency={this.state.selectedCurrency}
              />
              <DetailTable
                data={this.convertDataset(this.state.data)}
                selectedMetric={this.state.selectedMetric}
                setSelectedMetric={this.setSelectedMetric}
                selectedCurrency={this.state.selectedCurrency}
              />
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default Report;
