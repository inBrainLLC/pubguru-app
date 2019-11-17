import React, { Component } from 'react';
import Linebar from '../Linebar/Linebar';
import { Radio, Statistic, Card, Row, Col, Tooltip, Icon } from 'antd';
import SmallChart from '../SmallChart/SmallChart';

class Overview extends Component {
  state = {
    value: +7
  };

  onChange = (e) => {
    console.log('radio checked from overview', e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    };

    return (
      <div>
        <Card style={{ borderRadius: '5px' }}>
          <Row type="flex">
            <Col span={4} style={{ display: 'flex', alignItems: 'center' }}>
              <Radio.Group
                onChange={this.onChange}
                value={this.state.value}
                defaultValue={+7}
                size="small"
              >
                <Radio style={radioStyle} value={+7}>
                  Last 7 days
								</Radio>
                <Radio style={radioStyle} value={-7}>
                  Previous 7 days
								</Radio>
              </Radio.Group>
            </Col>
            <Col span={20}>
              <Col span={8}>
                <div className="overview-data">
                  <div className="overview-data-title">
                    <div>
                      <Tooltip title="Estimated earnign from EU countires(From GAM)">
                        <Icon type="question-circle" />{' '}Estimated EU Revenue
                      </Tooltip>
                    </div>
                    <Statistic
                      value={-1}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<Icon type="arrow-down" rotate={-45} />}
                      suffix="%"
                    />
                  </div>
                  <div className="overview-data-details">
                    <Linebar previous={150} current={274.64} />
                    <Statistic value={274.64} precision={2} prefix="$" />
                  </div>
                </div>
                <SmallChart data={this.props.data} selectedProp={this.props.selectedProp} />
              </Col>
              <Col span={8}>
                <div className="overview-data">
                  <div className="overview-data-title">
                    <div>
                      <Tooltip title="Revenue earned from every 1000 EU sessions">
                        <Icon type="question-circle" />{' '}EU Session RPM
                      </Tooltip>
                    </div>
                    <Statistic
                      value={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<Icon type="arrow-up" rotate={45} />}
                      suffix="%"
                    />
                  </div>
                  <div className="overview-data-details">
                    <Linebar previous={1.10} current={1.33} />
                    <Statistic value={1.33} precision={2} prefix="$" />
                  </div>
                </div>
                <SmallChart data={this.props.data} selectedProp={this.props.selectedProp} />
              </Col>
              <Col span={8}>
                <div className="overview-data">
                  <div className="overview-data-title">
                    <div>
                      <Tooltip title="Revenue earned from every 1000 EU pageviews">
                        <Icon type="question-circle" />{' '}EU Page RPM
                      </Tooltip>
                    </div>
                    <Statistic
                      value={8}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<Icon type="arrow-up" rotate={45} />}
                      suffix="%"
                    />
                  </div>
                  <div className="overview-data-details">
                    <Linebar previous={1.00} current={1.26} />
                    <Statistic value={1.26} precision={2} prefix="$" />
                  </div>
                </div>
                <SmallChart data={this.props.data} selectedProp={this.props.selectedProp} />
              </Col>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Overview;
