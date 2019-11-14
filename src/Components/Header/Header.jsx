import React, { Component } from "react";
import { Menu, Icon, Badge } from "antd";
import "./Header.less";
// import { Row, Col } from 'antd';

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
        <Icon
          className="trigger"
          type={this.props.isSidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                PUBLISHERS (207)
              <br />
                Allafrica
            </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                DOMAINS (32)
                {/* example_1.com  */}
            </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="mail">
            <img
              className="ant-menu-item"
              src={require("../../assets/img/logo.png")}
              width="180"
              height="55" alt="test"
            />
          </Menu.Item>
          <Menu.Item key="mail">
          <Badge count={5}> 
              <Icon type="bell" />  

           </Badge>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="appstore" />
              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("app"));
export default Header;
