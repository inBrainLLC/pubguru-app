import React, { Component } from "react";

import { Card, Table } from "antd";
import { Icon, Tooltip } from 'antd';
import moment from 'moment';

import './DetailTable.less';


class DetailTable extends Component {
  getData = () => {
    const { data } = this.props;
    return data
  };

  getColumns = () => {
    return [
      {
        title: (<span> <span className="title">Date</span>
        </span>),
        dataIndex: 'date',
        sorter: (a, b) => a.date.length - b.date.length,
        onFilter: (date, record) => record.date.indexOf(date) === 0,
        render: (value, record) => moment(record.date).format('YYYY-MM-DD'),
        className: 'table-date',
      },
      {
        title: (<span>
          <span className="question-circle">
            <Tooltip title="Estimated earnign from EU countires(From GAM)">
              <Icon type="question-circle" />
            </Tooltip>
          </span>

          <span className="title">Total Page View</span>
        </span>),
        dataIndex: 'totalPageView',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.totalPageView - b.totalPageView,
      },
      {
        title: (<span>
          <span className="question-circle">
            <Tooltip title="Estimated Eu Revinew">
              <Icon type="question-circle" />
            </Tooltip>
          </span>
          <span className="title">  Estimated Eu Revinew</span>
        </span>),
        dataIndex: 'estimatedEuRevinew',
        sortOrder: this.props.selectedMetric === 'estimatedEuRevinew',
        sorter: (a, b) => a.estimatedEuRevinew.length - b.estimatedEuRevinew.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title:
          (<span>
            <span className="question-circle">
              <Tooltip title="Non Eu Page views">
                <Icon type="question-circle" />
              </Tooltip>
            </span>
            <span className="title">Non Eu Page views</span>
          </span>),
        dataIndex: 'nonEuPageviews',
        sortOrder: this.props.selectedMetric === 'nonEuPageviews',
        sorter: (a, b) => a.nonEuPageviews.length - b.nonEuPageviews.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: (<span>
          <span className="question-circle">
            <Tooltip title="Priviously  Consented">
              <Icon type="question-circle" />
            </Tooltip>
          </span>
          <span className="title">Priviously  Consented</span>
        </span>),
        dataIndex: 'priviouslyConsented',
        sortOrder: this.props.selectedMetric === 'priviouslyConsented',
        sorter: (a, b) => a.priviouslyConsented.length - b.priviouslyConsented.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title:
          (<span>
            <span className="question-circle">
              <Tooltip title="Shown  And Consented">
                <Icon type="question-circle" />
              </Tooltip>
            </span>
            <span className="title"> Shown  And Consented</span>
          </span>),
        dataIndex: 'shownAndConsented',
        sortOrder: this.props.selectedMetric === 'shownAndConsented',
        sorter: (a, b) => a.shownAndConsented.length - b.shownAndConsented.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title:
          (<span>
            <span className="question-circle">
              <Tooltip title="Shown And Non Consented">
                <Icon type="question-circle" />
              </Tooltip>
            </span>
            <span className="title">Shown And Non Consented</span>
          </span>),
        dataIndex: 'shownAndNonConsented',
        sortOrder: this.props.selectedMetric === 'shownAndNonConsented',
        sorter: (a, b) => a.shownAndNonConsented.length - b.shownAndNonConsented.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title:
          (<span>
            <span className="question-circle">
              <Tooltip title="Gdpr Popup Ctr">
                <Icon type="question-circle" />
              </Tooltip>
            </span>
            <span className="title">Gdpr Popup Ctr</span>
          </span>),
        dataIndex: 'gdprPopupCtr',
        sortOrder: this.props.selectedMetric === 'gdprPopupCtr',
        sorter: (a, b) => a.gdprPopupCtr.length - b.gdprPopupCtr.length,
        sortDirections: ['descend', 'ascend'],
      },
    ];
  }

  onSelect = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
    console.log(sorter.field);
    if (sorter.field !== 'date') {
      this.props.setSelectedMetric(sorter.field);
    }
  }

  render() {
    const data = this.getData();
    console.log(this.props.selectedMetric === 'estimatedEuRevinew');
    return (
      <Card style={{ margin: '40px 0', borderRadius: '5px' }} className="datatable">
        <Table
          columns={this.getColumns()}
          dataSource={data}
          onChange={this.onSelect}
          />
      </Card>
    )
  }
}

export default DetailTable;
