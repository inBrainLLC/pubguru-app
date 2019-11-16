import React, { Component } from "react";
// import $ from "jquery";
// import daterangepicker from "daterangepicker";
import { Icon } from 'antd';
import DateTimeRangeContainer from 'react-advanced-datetimerange-picker'
// import {FormControl} from 'react-bootstrap'
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
    
        this.onClick = this.onClick.bind(this);
        this.applyCallback = this.applyCallback.bind(this);

    }
    
    
    local = {
      "format":"DD-MM-YYYY HH:mm",
      "sundayFirst" : false
    }
    
    
    applyCallback(startDate, endDate) {
      console.log('Apply Callback');
      console.log(startDate.format('DD-MM-YYYY HH:mm'));
      console.log(endDate.format('DD-MM-YYYY HH:mm'));
      this.setState({
        start: startDate,
        end: endDate,
      });
    }
    
    rangeCallback(index, value) {
      console.log(index, value);
    }
    
    onClick() {
      let newStart = moment(this.state.start).subtract(3, 'days');
      // console.log("On Click Callback");
      // console.log(newStart.format("DD-MM-YYYY HH:mm"));
      this.setState({ start: newStart });
    }
    
    
render(){

    let now = new Date();
    let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0));
    let end = moment(start).add(1, "days").subtract(1, "seconds");
    let ranges = {
        "Today Only": [moment(start), moment(end)],
        "Yesterday Only": [moment(start).subtract(1, "days"), moment(end).subtract(1, "days")],
        "3 Days": [moment(start).subtract(3, "days"), moment(end)],
        "7 days":[moment(start).subtract(7, "days"), moment(end)]
    }
    let local = {
        "format":"DD-MM-YYYY HH:mm",
        "sundayFirst" : false
    }
    let maxDate = moment(start).add(24, "hour");
    // let disabled = true;
    let value = `${this.state.start.format('DD-MM-YYYY HH:mm')} - ${this.state.end.format('DD-MM-YYYY HH:mm')}`;
  
  return(
      <div>
           <div onClick={this.onClick}></div>
         <DateTimeRangeContainer
         ranges={ranges}
         start={this.state.start}
         end={this.state.end}
         local={local}
         maxDate={maxDate}
         applyCallback={this.applyCallback}
         rangeCallback={this.rangeCallback}
         smartMode
       >
             

<span id="formControlsTextB" className="calenderformControlsTextB">
<Icon type="calendar" theme="filled" />
    <b>Last 7 days</b> <span>{value}</span>
</span> 

          </DateTimeRangeContainer>

      </div>
      
  );
}
}
export default Calendar;
