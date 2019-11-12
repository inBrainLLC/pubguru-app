import React, { Component } from "react";
import ReactFlot from 'react-flot';

class DataChart extends Component {
  
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

    return <ReactFlot id="product-chart" options={options} data={data} width="50%" height="100px" />
  }

  getData = () => {
    const { selectedProp, data } = this.props;
    return data.map(d => [d.date, d[selectedProp]]);
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
