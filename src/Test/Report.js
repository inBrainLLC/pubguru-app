import React, { Component } from "react";
import "./App.css";
import MyToDoList from "./Test";
import Calendar from "../Components/Calendar/Calendar";

class Report extends Component {
  render() {
    return (
      <div className="report">
        <div className="header">
          <span>GDPR Report</span>
          <MyToDoList></MyToDoList>
          <Calendar></Calendar>
        </div>
        <br />
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));
export default Report;
