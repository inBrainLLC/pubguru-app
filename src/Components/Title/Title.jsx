import React, { Component } from "react";
import { Menu, Dropdown, Icon, Button } from "antd";
import  Calendar from '../Calendar/Calendar'
import { Row, Col } from 'antd';

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
        <Row>

        <Col span={8}> <span>GDPR Report</span></Col>

         
          {/* <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              Hover me <Icon type="down" />
            </a>

          </Dropdown> */}
                <Col span={8} offset={8}>

          <span><Calendar></Calendar></span>
          </Col>
          </Row>

        </div>
        
        <hr />
        <div className="report-buttons">
          <Button>How To Implement PubGuru Data Guard</Button>
          <Button>How To Test PubGuru Data Guard</Button>
        </div>
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
