import React, { Component } from "react";
import { Menu,Icon } from "antd";
import  Calendar from '../Calendar/Calendar'
import { Row, Col } from 'antd';
import DateTimeRangeContainer from 'react-advanced-datetimerange-picker'
import {FormControl} from 'react-bootstrap'
import moment from "moment"

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

        <Col span={2}> <span>GDPR Report</span></Col>

         
          {/* <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              Hover me <Icon type="down" />
            </a>

          </Dropdown> */}
                <Col span={12} offset={8}>


       
           <span><Calendar></Calendar></span>
      
      
        </Col>
          </Row>

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
