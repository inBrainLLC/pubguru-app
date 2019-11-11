import React, { Component } from "react";

import Title from '../../Components/Title/Title';
import Toolbar from '../../Components/Toolbar/Toolbar';
import Overview from '../../Components/Overview/Overview';
import DataChart from '../../Components/DataChart/DataChart';
import DetailTable from '../../Components/DetailTable/DetailTable';

import data from './demoData';

class Report extends Component {
  state = {
    data,
  }
  
  render() {
    return (
        <div>
            <Title />
            <Toolbar />
            <Overview />
            <DataChart />
            <DetailTable
              data={this.state.data}
            />
        </div>
    );
  }
}

export default Report;
