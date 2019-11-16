import React, { Component } from "react";

// get our fontawesome imports
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Icon, Typography, Badge } from "antd";
const { SubMenu } = Menu;
const { Text } = Typography;

class SideBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="gray"
            inlineCollapsed={this.props.isSidebarCollapsed}
          >
            <Menu.Item key="1">
            <Icon type="clock-circle" />              <span>Dashbord</span>
            </Menu.Item>
            <Menu.Item key="2">
            <Icon type="bell" theme="filled" />
              <span>Notification</span>
              <Badge count={12} style={{ backgroundColor: "orange" }} />
            </Menu.Item>

            <div className="with_nav"></div>

            <Text strong>Reports</Text>

            <Menu.Item key="4">
            <Icon type="bar-chart" />              Analytics Report
            </Menu.Item>
            <Menu.Item key="20">
            <Icon type="line-chart" />              Adx Report
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
<Icon type="pie-chart" />                  <span>Advance Reports</span>
                </span>
              }
            >
              <Menu.Item key="6">Revune Discrepancy</Menu.Item>
              <Menu.Item key="7">Revune attribution</Menu.Item>
              <Menu.Item key="8">Google policy</Menu.Item>
              <Menu.Item key="9">GDPR</Menu.Item>
              <Menu.Item key="10">Ad Map</Menu.Item>
            </SubMenu>

            <div className="with_nav"></div>

            <Text strong>Manage</Text>
            <Menu.Item key="12">
            <Icon type="account-book" />              Account Connections
            </Menu.Item>

            <div className="with_nav"></div>
            <Text strong>Furad detection</Text>

            <Menu.Item key="14">
            <Icon type="codepen" />              Tracfic cap
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default SideBar;
