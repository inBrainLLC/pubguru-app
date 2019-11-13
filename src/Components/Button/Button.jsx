import React, { Component } from "react";

import { Button } from 'antd';
import { Radio } from 'antd';


class PButton extends Component {

    // state = {
    //     value: +7,
    //   };
    
    //   onChange = e => {
    //     console.log('radio checked', e.target.value);
    //     this.setState({
    //       value: e.target.value,
    //     });
    //   };

      render() {

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };


        
        return (
            <Radio.Group onChange={this.onChange} value={this.state.value} defaultValue={+7}>
            <Radio style={radioStyle} value={+7}>
              Last 7 days
            </Radio>
            <Radio style={radioStyle} value={-7}>
            Previous 7 days
            </Radio>
          </Radio.Group>
        
        );
        
}



}

export default PButton; 