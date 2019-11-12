import React, { Component } from "react";
import ReactFlot from 'react-flot';

class DataChart extends Component {

  renderChart = () => {
    const data = [ [[0, 0], [1, 1]] ];
    const options = { yaxis: { max: 1 } };
    return <ReactFlot id="product-chart" options={options} data={data} width="50%" height="100px" />
  }

  render() {
    return (
        <div>
            {this.renderChart()}
        </div>
    );
  }
}

export default DataChart;
