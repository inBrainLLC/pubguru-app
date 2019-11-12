import React, { Component } from "react";
import { Menu, Dropdown, Icon, Button, message } from "antd";

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);

class DataChart extends Component {
  render() {
    return (
      <div className="data-chart" id="components-dropdown-demo-dropdown-button">
        <div className="button-dropdown">
          <span>Matric</span>
          <Dropdown overlay={menu}>
            <Button>
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
        <div className="button-dropdown">
          <span>Matric</span>
          <Dropdown overlay={menu}>
            <Button>
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
        <div className="button-dropdown">
          <span>Matric</span>
          <Dropdown overlay={menu}>
            <Button>
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default DataChart;
