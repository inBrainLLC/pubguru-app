import React, { Component } from "react";
import ReactFlot from "react-flot";
import '../../../node_modules/react-flot/flot/jquery.flot.time';

class DataChart extends Component {
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

  renderChart = () => {
    const data = this.getData();
    console.log(data);
    const dataOption = {
      label: "Estimated EU Revenue",
      data,
      points: { symbol: "circle" },
    }
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
        tickSize: [1, "month"],
        tickLength: 0,
        axisLabel: "2012",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 10,
    },
    yaxis: {
        position: "right",
        axisLabel: "Change(%)",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 3
    },
    };

    return (
      <ReactFlot
        id="product-chart"
        options={options}
        data={dataOption}
        // data={[ [1, 3], [2, 14.01], [3.5, 3.14] ]}
        width="100%"
        height="200px"
      />
    );
  };

  render() {

    // var d3 = [[0, 12], [7, 12], [7, 2.5], [12, 2.5]];

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
        tickSize: [1, "month"],
        tickLength: 0,
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
        borderWidth: 1,
        borderColor: "#d9d9d9",
        // markings: [ { yaxis: { from: 1, to: 1 } } ]
        // backgroundColor: { colors: ["#ffffff", "#EDF5FF"] }
      },
      colors: ["#3fc0e8"],
    };

    return (
      <div>
        <ReactFlot id="product-charts" options={options} data={dataset} width="100%" height="200px" />
      </div>
    );
  }
}

export default DataChart;
