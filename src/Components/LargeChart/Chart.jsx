import React, { Component } from "react";
import ReactFlot from "react-flot";
import '../../../node_modules/react-flot/flot/jquery.flot.time';

import LargeChart from './LargeChart';

class Chart extends Component {
  render() {

    return (
      <div>
        <LargeChart />
      </div>
    );
  }
}

export default Chart;
