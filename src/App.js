import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Report from "./Report";
import "./loader.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <SideBar></SideBar>
        <Report></Report>
        {/* <div id="container"></div> */}
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));
export default App;
