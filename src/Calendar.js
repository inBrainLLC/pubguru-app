import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import daterangepicker from "../node_modules/daterangepicker/daterangepicker.js";

class Calendar extends Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.daterangepicker();
  }
  render() {
    return (
      <input
        ref={el => (this.el = el)}
        type="text"
        name="daterange"
        value="01/01/2018 - 01/15/2018"
      />
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));
export default Calendar;
