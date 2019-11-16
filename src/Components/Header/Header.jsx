import React, { Component } from "react";
import { Icon, } from "antd";
import "./Header.less";

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
            <Icon
              className="header-hamburger"
              type={this.props.isSidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.onToggle}
            />
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
                <Icon type="bell" style={{ color: '#9eacb7' }} />
              </li>
              <li> 
                <div style={{ display: 'inline' }}><Icon type="setting" style={{ color: '#9eacb7' }} /> <Icon type="caret-down" style={{ color: '#9eacb7', fontSize: '10px' }} /></div>
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
