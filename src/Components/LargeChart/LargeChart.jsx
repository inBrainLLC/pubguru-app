import React, { Component } from "react";
import ReactFlot from "react-flot";
import '../../../node_modules/react-flot/flot/jquery.flot.time';
import uuid from 'uuid';

class LargeChart extends Component {
  state = {
    id: uuid(),
  }

  getData = () => {
    const { selectedProp, data } = this.props;
    return data.map(d => [d.date, d[selectedProp]]);
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
    const max = Math.max(...yAxis) * 1.20;
    // const min = Math.min(...yAxis);
    return { max, min: 0 };
  }

  render() {
    const data = this.getData();

    var dataset = [
        { label: "Estimated EU Revenue", data: data, points: { symbol: "circle" } }, // color: #3fc0e8;
    ];

    const options = {
      lines: {
        show: true,
      },
      points: {
        radius: 3,
        fill: true,
        show: true
      },
      xaxis: {
        mode: "time",
        timeBase: "milliseconds",
        timeformat: "%d %b",
        minTickSize: [1, "day"],
        autoScale: "none",
        axisLabelFontSizePixels: 12,
        axisLabelPadding: 10,
        ...this.getXDimensions(data),
      },
      yaxis: {
        position: "left",
        axisLabel: "Change(%)",
        axisLabelUseCanvas: true,
        axisLabelPadding: 10,
        ...this.getYDimensions(data),
      },
      legend: {
        // noColumns: 0,
        // labelBoxBorderColor: "#000000",
        // position: "nw"
      },
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 1,
        borderColor: "#d9d9d9",
      },
      colors: ["#3fc0e8"],
    };

    return (
      <div>
        <ReactFlot id={this.state.id} options={options} data={dataset} width="100%" height="200px" />
      </div>
    );
  }
}

export default LargeChart;
