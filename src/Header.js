import React, { Component } from "react";
import "./App.css";

// get our fontawesome imports
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li>
              <span className="uniform-padding">
                <FontAwesomeIcon icon={faBars} />
              </span>
            </li>
            <li>
              <span className="non-uniform-padding">
                <h5>Publishers (207)</h5>
                <h4>
                  Allafrica <FontAwesomeIcon icon={faCaretDown} />
                </h4>
              </span>
            </li>
            <li>
              <span className="non-uniform-padding">
                <h5>Domains (32)</h5>
                <h4>
                  example_1.com <FontAwesomeIcon icon={faCaretDown} />
                </h4>
              </span>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));
export default Header;
