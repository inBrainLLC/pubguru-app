import React, { Component } from "react";

import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Report from './Report';

class ReportPage extends Component {
  render() {
      return (
        <div>
          <Header></Header>
          <Sidebar></Sidebar>
          <Report></Report>
        </div>
      );
  }
}

export default ReportPage;