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
    selectedProp: "estimatedEuRevinew",
    selectedCurrency: "USD"
  };

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
              <Toolbar />
              <Overview />
              <Chart
                data={this.state.data}
                selectedProp={this.state.selectedProp}
              />
              <DetailTable data={this.state.data} />
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default Report;
