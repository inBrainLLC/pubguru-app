import React, { Component } from "react";
import { Typography } from "antd";

import Calendar from '../Calendar/Calendar';

const { Title: TitleAnt } = Typography;


class Title extends Component {
  render() {
    return (
      <div>
        <div className="title-bar">
          <TitleAnt level={2} style={{ color: '#8193a1' }}>GDPR Report</TitleAnt>
          <span><Calendar></Calendar></span>
        </div>
      </div>
    );
  }
}

export default Title;
