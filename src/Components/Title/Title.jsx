import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

class Title extends Component {
  render() {
    return (
      <div>
        <div className="title-bar">
          <h1>GDPR Report</h1>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              Hover me <Icon type="down" />
            </a>
          </Dropdown>
        </div>
        <hr />
      </div>
      // <PageHeader
      //   style={{
      //     border: "1px solid rgb(235, 237, 240)"
      //   }}
      //   onBack={() => null}
      //   title="Title"
      //   subTitle="This is a subtitle"
      // />
    );
  }
}

export default Title;
