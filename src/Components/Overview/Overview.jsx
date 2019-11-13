import React, { Component } from "react";
import Linebar from '../Linebar/Linebar';
import LinebarSeven from '../Linebar/LinebarSeven'
import { Radio } from 'antd';
import { Row, Col } from 'antd';
import { Tooltip } from 'antd';
import { Icon } from 'antd';
import { Statistic } from 'antd';
// const { Text } = Typography;

class Overview extends Component {

  state = {
    value: +7,
  };


  onChange = e => {
    console.log('radio checked from overview', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  

 
  render() {

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
        <div>
    <Row type="flex">

      <Col span={18} push={6}>

      <Col span={6}>
        <Tooltip title="prompt text">
        <Icon type="question-circle" />  </Tooltip>   
          <Statistic
            title="Estimated eu revenue"
            value={-1}
            valueStyle={{ color: '#cf1322' }}
            prefix={<Icon type="arrow-down" />}
            suffix="%"
          />
             {this.state.value == '+7'?  <Linebar name={"$274.64"}  value1={50} value2={80}/> : <LinebarSeven name={"$274.64"}  value1={50} value2={50}/> }
              


       </Col>
      <Col span={6} order={2}>
      <Tooltip title="prompt text">
      <Icon type="question-circle" />  </Tooltip>  
      <Statistic
            title="Estimated eu revenue"
            value={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<Icon type="arrow-up" />}
            suffix="%"
          />  


            {this.state.value == '+7'?  <Linebar name={"$274.64"}  value1={70} value2={50}/> : <LinebarSeven name={"$274.64"}  value1={100} value2={50}/> }
                   
       

          </Col>
      <Col span={6} order={1}>
      <Tooltip title="prompt text">
      <Icon type="question-circle" />  </Tooltip>  
      <Statistic
            title="Estimated eu revenue"
            value={8}
            valueStyle={{ color: '#3f8600' }}
            prefix={<Icon type="arrow-up" />}
            suffix="%"
          /> 
                
{this.state.value === '+7'?  <Linebar name={"$274.64"}  value1={100} value2={50}/> : <LinebarSeven name={"$274.64"}  value1={50} value2={80}/> }

                   


      </Col>
</Col>
      <Col span={6} pull={18}>

      <Radio.Group onChange={this.onChange} value={this.state.value} defaultValue={+7}>
            <Radio style={radioStyle} value={+7}>
              Last 7 days
            </Radio>
            <Radio style={radioStyle} value={-7}>
            Previous 7 days
            </Radio>
          </Radio.Group>
      <div>
          
            </div>
        </Col>

      </Row>

        </div>
    );
  }
}

export default Overview;
