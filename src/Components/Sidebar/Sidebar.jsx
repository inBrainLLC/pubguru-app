import React, { Component } from "react";
import { Menu, Icon, Typography, Badge } from "antd";

import './Sidebar.less';

const { SubMenu } = Menu;
const { Text } = Typography;

class SideBar extends Component {
  render() {
    const { isSidebarCollapsed } = this.props;
    return (
      <div className="navbar">
        <div>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="gray"
            inlineCollapsed={isSidebarCollapsed}
          >
            <Menu.Item key="1">
              <Icon type="clock-circle" className="menu-icon" /><span>Dashbord</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="bell" theme="filled" className="menu-icon" />
              <span>Notification</span>
              {!isSidebarCollapsed && <Badge count={12} style={{ backgroundColor: "orange" }} />}
            </Menu.Item>

            <div className="with_nav"></div>

            {!isSidebarCollapsed && <Text strong className="section-header">Reports</Text>}

            <Menu.Item key="4">
              <Icon type="bar-chart" className="menu-icon" />{!isSidebarCollapsed && 'Analytics Report'}
            </Menu.Item>
            <Menu.Item key="20">
              <Icon type="line-chart" className="menu-icon" />{!isSidebarCollapsed && 'Adx Report'}
            </Menu.Item>
            <Menu.Item key="21">
              <Icon type="gold" className="menu-icon" />{!isSidebarCollapsed && 'Ad Network Report'}
            </Menu.Item>
            <SubMenu
              className="submenu"
              key="sub1"
              title={
                <span>
                  <Icon type="pie-chart" className="menu-icon" /><span>Advance Reports</span>
                </span>
              }
            >
              <Menu.Item key="6">Revenue Discrepancy</Menu.Item>
              <Menu.Item key="7">Revenue Attribution</Menu.Item>
              <Menu.Item key="8">Google policy</Menu.Item>
              <Menu.Item key="9">GDPR</Menu.Item>
              <Menu.Item key="10">Ad Map</Menu.Item>
            </SubMenu>

            <div className="with_nav"></div>

            {!isSidebarCollapsed && <Text strong className="section-header">Manage</Text>}
            <Menu.Item key="12">
              <Icon type="account-book" className="menu-icon" />{!isSidebarCollapsed && 'Account Connections'}
            </Menu.Item>

            <div className="with_nav"></div>
            {!isSidebarCollapsed && <Text strong className="section-header">Fraud detection</Text>}

            <Menu.Item key="14">
              <Icon type="codepen" className="menu-icon" />{!isSidebarCollapsed && 'Tracfic cop'}
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default SideBar;
