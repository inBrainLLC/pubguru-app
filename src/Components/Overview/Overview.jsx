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
								<Tooltip title="Estimated earnign from EU countires(From GAM)">
									<Icon type="question-circle" />{' '}
								</Tooltip>
								<Statistic
									title="Estimated eu revenue"
									value={-1}
									valueStyle={{ color: '#cf1322' }}
									prefix={<Icon type="arrow-down" />}
									suffix="%"
								/>
								{this.state.value == '+7' ? (
									<Linebar name={'$274.64'} value1={50} value2={80} />
								) : (
									<Linebar name={'$100.64'} value1={80} value2={50} />
								)}
								<div className="card">
									<SmallChart data={this.props.data} selectedProp={this.props.selectedProp} />
								</div>
							</Col>
							<Col span={8}>
								<Tooltip title="Revenue earnd from Every 1,000 EU session">
									<Icon type="question-circle" />{' '}
								</Tooltip>
								<Statistic
									title="Estimated eu revenue"
									value={2}
									valueStyle={{ color: '#3f8600' }}
									prefix={<Icon type="arrow-up" />}
									suffix="%"
								/>
								{this.state.value == '+7' ? (
									<Linebar name={'$274.64'} value1={70} value2={50} />
								) : (
									<Linebar name={'$100.64'} value1={60} value2={50} />
								)}
								<SmallChart data={this.props.data} selectedProp={this.props.selectedProp} />
							</Col>
							<Col span={8}>
								<Tooltip title="Revenue earnd from Every 1,000 EU pageview">
									<Icon type="question-circle" />{' '}
								</Tooltip>
								<Statistic
									title="Estimated eu revenue"
									value={8}
									valueStyle={{ color: '#3f8600' }}
									prefix={<Icon type="arrow-up" />}
									suffix="%"
								/>
								{this.state.value == '+7' ? (
									<Linebar name={'$274.64'} value1={70} value2={50} />
								) : (
									<Linebar name={'$100.64'} value1={30} value2={50} />
								)}
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
