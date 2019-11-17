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
    selectedMetric: "estimatedEuRevinew",
    selectedCurrency: "USD",
  };

  setSelectedMetric = selectedMetric => this.setState({ selectedMetric });

  // convertCurrency = () => {
  //   return
  // }

  render() {
    return (
      <div>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <div>
              <Title />
              <Toolbar
                data={this.state.data}
                selectedMetric={this.state.selectedMetric}
                selectedCurrency={this.state.selectedCurrency}
              />
              <Overview
                data={this.state.data}
                selectedMetric={this.state.selectedMetric}
                setSelectedMetric={this.setSelectedMetric}
              />
              <Chart
                data={this.state.data}
                selectedMetric={this.state.selectedMetric}
                setSelectedMetric={this.setSelectedMetric}
              />
              <DetailTable
                data={this.state.data}
                selectedMetric={this.state.selectedMetric}
                setSelectedMetric={this.setSelectedMetric}
              />
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default Report;
