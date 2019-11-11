import React, { Component } from "react";
import "./App.css";
import MyToDoList from "./Test";
import Calendar from "./Calendar";

class Report extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = "document.write('This is output by document.write()!')";
    this.instance.appendChild(s);
  }

  render() {
    return <div ref={el => (this.instance = el)} />;
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));
export default Report;
