import React, { Component } from "react";
import { Menu, Icon, Badge } from "antd";
import "./Header.less";
// import { Row, Col } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { SubMenu } = Menu;

class Header extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="header-container">

        <div className="grid_3">
          <div className="header_left">
            <a href=""><i class="fas fa-bars"></i></a>
            <ul>
              <li>
                <span>PUBLISHERS(207)</span>
                <select>
                  <option value="Allafrica">Allafrica 1</option>
                  <option value="Allafrica">Allafrica 2</option>
                  <option value="Allafrica">Allafrica 3</option>
                </select>
              </li>
              <li> 
                <span>DOMAINS(32)</span>
                <select>
                  <option value="Allafrica">example1.com</option>
                  <option value="Allafrica">example2.com</option>
                  <option value="Allafrica">example3.com</option>
                </select>
              </li>
            </ul>
            {/*<a href="">test n</a>
            <div className="drop_down show">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>*/}

            
          </div>
        </div>

        <div className="grid_3">
          <div className="header_logo">
            <img src={require("../../assets/img/logo.png")} alt="logo"/>
          </div>
        </div>

        <div className="grid_3">
          <div className="header_right">
            <ul>
              <li>
                <span>12</span>
                <Icon type="bell" theme="filled" />
              </li>
              <li> 
                <i class="fas fa-cog"></i>
                <i class="fas fa-caret-down"></i>
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));
export default Header;
