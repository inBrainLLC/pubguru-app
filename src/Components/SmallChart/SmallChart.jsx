var FlotChart = React.createClass({
  displayName: "FlotChart",
  renderChart: function() {
    var chartDiv = this.refs.chartDiv,
      chartData = this.props.model,
      chartOptions = this.props.options;

    jQuery(chartDiv)
      .width(300)
      .height(200);
    jQuery.plot(chartDiv, chartData, chartOptions);
  },
  componentWillReceiveProps: function(nextProps) {
    // called to see if the component is receiving props
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    // called to ask whether the component should be updated
    return true;
  },
  componentDidMount: function() {
    // called when the component is mounted
    this.renderChart();
  },
  componentDidUpdate: function() {
    // called after the props are updated
    this.renderChart();
  },
  render: function() {
    return React.DOM.div({
      className: "flotChart",
      ref: "chartDiv"
    });
  }
});

var chartOptions = {
    series: {
      bars: {
        show: true,
        barWidth: 0.3,
        align: "center",
        lineWidth: 0,
        fill: 0.75
      }
    },
    xaxis: {
      ticks: [[0, "First"], [1, "Second"], [2, "Third"], [3, "Fourth"]],
      mode: "categories",
      tickLength: 0
    },
    yaxis: {
      max: 10
    }
  },
  chartData = [[0, 4], [1, 6], [2, 3], [3, 8]];

ReactDOM.render(
  React.createElement(FlotChart, {
    model: [chartData],
    options: chartOptions
  }),
  document.getElementById("container")
);
