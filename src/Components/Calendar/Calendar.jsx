import React, { Component } from "react";
// import $ from "jquery";
// import daterangepicker from "daterangepicker";
import { Icon,Button } from 'antd';


import DateTimeRangeContainer from 'react-advanced-datetimerange-picker'
import {FormControl} from 'react-bootstrap'
import moment from "moment"

// class Calendar extends Component {
//   componentDidMount() {
//     this.$el = $(this.el);
//     this.$el.daterangepicker();
//   }
//   render() {
//     return (
//       <input
//         ref={el => (this.el = el)}
//         type="text"
//         name="daterange"
//         value="01/01/2018 - 01/15/2018"
//       />
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

class Calendar extends Component {
  constructor(props){
    super(props);
    let now = new Date();
    let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0));
    let end = moment(start).add(1, "days").subtract(1, "seconds");
    this.state = {
        start : start,
        end : end
    }

    this.applyCallback = this.applyCallback.bind(this);
}

applyCallback(startDate, endDate){
    this.setState({
            start: startDate,
            end : endDate
        }
    )
}
render(){
  let now = new Date();
  let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0));
  let end = moment(start).add(1, "days").subtract(1, "seconds");
  let ranges = {
      "Today Only": [moment(start), moment(end)],
      "Yesterday Only": [moment(start).subtract(1, "days"), moment(end).subtract(1, "days")],
      "3 Days": [moment(start).subtract(3, "days"), moment(end)]
  }
  let local = {
      "format":"DD-MM-YYYY HH:mm",
      "sundayFirst" : false
  }
  let maxDate = moment(start).add(24, "hour");
  let disabled = true;
  let value = `${this.state.start.format('DD-MM-YYYY HH:mm')} - ${this.state.end.format('DD-MM-YYYY HH:mm')}`;

  return(
      <div>
          <DateTimeRangeContainer 
              ranges={ranges}
              start={this.state.start}
              end={this.state.end}
              local={local}
              maxDate={maxDate}
              applyCallback={this.applyCallback}
          >    
              {/* <FormControl
              id="formControlsTextB"
              type="text"
              label="Text"
              placeholder="Enter text"
              />  */}
              <Icon type="calendar" />
              {/* <FormControl
                id="formControlsTextB"
                type="text"
                style={{ cursor: 'pointer' }}
                disabled={disabled}
                value={value}
              /> */}

<span id="formControlsTextB"><b>Last 7 days</b>{value}</span> 

          </DateTimeRangeContainer>
      </div>
  );
}
}
export default Calendar;
