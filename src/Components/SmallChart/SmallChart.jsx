import React, { Component } from "react";
import ReactFlot from "react-flot";
import '../../../node_modules/react-flot/flot/jquery.flot.time';
import uuid from 'uuid';

class LargeChart extends Component {
  state = {
    id: uuid(),
  }

  getData = () => {
    const { selectedMetric, data } = this.props;
    return data.map(d => [d.date, d[selectedMetric]]);
  };

  getXDimensions = data => {
    const xAxis = data.map(c => c[0]);
    const max = Math.max(...xAxis);
    const min = Math.min(...xAxis);
    return {
      mode: "time",
      timeBase: "milliseconds",
      timeformat: "%d %b",
      max,
      min,
    }
    // return { max, min };
  }

  getYDimensions = data => {
    const yAxis = data.map(c => c[1]);
    const max = Math.max(...yAxis) * 1.10;
    const min = Math.min(...yAxis) * 0.80;
    return { max, min };
  }

  render() {
    const data = this.getData();

    var dataset = [
        { data: data, points: { symbol: "circle" } },
    ];

    const options = {
      lines: {
        show: true,
        show: true, 
        fill: true,
        lineWidth: 1,
      },
      points: {
        radius: 2,
        // fill: true,
        show: true
      },
      xaxis: {
        mode: "time",
        tickLength: 0,
        ticks: [],
      },
      yaxis: {
        position: "left",
        tickLength: 0,
        ticks: [],
        ...this.getYDimensions(data),
      },
      legend: {
      },
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 1,
        borderColor: "transparent",
      },
      colors: ["#38bee7"],
      shadowSize: 0,
    };

    return (
      <div>
        <ReactFlot id={this.state.id} options={options} data={dataset} width="95%" height="75px" />
      </div>
    );
  }
}

export default LargeChart;
