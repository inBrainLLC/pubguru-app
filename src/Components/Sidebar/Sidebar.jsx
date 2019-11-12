import React, { Component } from "react";

// get our fontawesome imports
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Icon,Typography,Badge } from 'antd';
const { SubMenu } = Menu;
const { Text } = Typography

class SideBar extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="navbar">
<div style={{ width: 256 }}>
  
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="gray"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Dashbord</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Notification</span>
            <Badge count={12} style={{ backgroundColor: 'orange' }} />

          </Menu.Item>

          <div className="with_nav"></div>

          <Text strong>Reports</Text>

            <Menu.Item key="4">
            <Icon type="mail" />

              Analytics Report
              </Menu.Item>
            <Menu.Item key="20">
            <Icon type="mail" />

              Adx Report
              </Menu.Item>
              <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Advance Reports</span>
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
            <Icon type="mail" />
              Account Connections
              </Menu.Item>
            
            <div className="with_nav"></div>
            <Text strong>Furad detection</Text>
               
          <Menu.Item key="14">
            <Icon type="mail" />
            Tracfic cap              
            </Menu.Item>
        </Menu>
      </div>
      </div>
    );
  }

}

// ReactDOM.render(<App />, document.getElementById("app"));
export default SideBar;
