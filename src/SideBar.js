import React, { Component } from "react";
import "./App.css";

// get our fontawesome imports
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SideBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <span className="uniform-padding">
              <FontAwesomeIcon icon={faBars} />
              Dashboard
            </span>
          </li>
          <li>
            <span className="uniform-padding">
              <FontAwesomeIcon icon={faBars} />
              Notification
            </span>
          </li>
          <li>
            <span className="uniform-padding">
              <FontAwesomeIcon icon={faBars} />
              Analytics Report
            </span>
          </li>
          <li>
            <span className="uniform-padding">
              <FontAwesomeIcon icon={faBars} />
              AdX Report
            </span>
          </li>
          <li>
            <span className="uniform-padding">
              <FontAwesomeIcon icon={faBars} />
              Ad Network Report
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));
export default SideBar;
