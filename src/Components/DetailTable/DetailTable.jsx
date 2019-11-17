import React, { Component } from "react";

import { Card,Table } from "antd";
import { Icon,Tooltip } from 'antd';

import './DetailTable.less';


class DetailTable extends Component {  
  
  
  getData = () => {
    const {data } = this.props;
    return data
  };

  render() {
      const columns = [
        {
          title: <span> <span className="title">Date</span>
            </span>,
          dataIndex: 'date',
          sorter: (a, b) => a.date.length - b.date.length,
          onFilter: (date, record) => record.date.indexOf(date) === 0,

        },
        {
          title: <span>
              <span className="question-circle"> 
              <Tooltip title="Estimated earnign from EU countires(From GAM)">
              <Icon type="question-circle" /> 
              </Tooltip>
              </span> 

              <span className="title">Total Page View</span>
          </span>,
          dataIndex: 'totalPageView',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.totalPageView - b.totalPageView,
        },
        {
          title: <span>

              <span className="question-circle"> 
              <Tooltip title="Estimated Eu Revinew">
              <Icon type="question-circle" /> 
              </Tooltip>
              </span> 
              <span className="title">  Estimated Eu Revinew</span>
          </span>,
          dataIndex: 'estimatedEuRevinew',
          sorter: (a, b) => a.estimatedEuRevinew.length - b.estimatedEuRevinew.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 
          <span>
                 <span className="question-circle"> 
              <Tooltip title="Non Eu Page views">
              <Icon type="question-circle" /> 
              </Tooltip>
              </span> 
              <span className="title">Non Eu Page views</span>
            </span>,
          dataIndex: 'nonEuPageviews',
          sorter: (a, b) => a.nonEuPageviews.length - b.nonEuPageviews.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: <span>
                  <span className="question-circle"> 
              <Tooltip title="Priviously  Consented">
              <Icon type="question-circle" /> 
              </Tooltip>
              </span> 
              <span className="title">Priviously  Consented</span>
            </span>,
          dataIndex: 'priviouslyConsented',
          sorter: (a, b) => a.priviouslyConsented.length - b.priviouslyConsented.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 
          <span>
              <span className="question-circle"> 
              <Tooltip title="Shown  And Consented">
              <Icon type="question-circle" /> 
              </Tooltip>
              </span> 
              <span className="title"> Shown  And Consented</span>
          </span>,
          dataIndex: 'shownAndConsented',
          sorter: (a, b) => a.shownAndConsented.length - b.shownAndConsented.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title:
          <span> 
                  <span className="question-circle"> 
              <Tooltip title="Shown And Non Consented">
              <Icon type="question-circle" /> 
              </Tooltip>
              </span> 
          <span className="title">Shown And Non Consented</span>
          </span>,
          dataIndex: 'shownAndNonConsented',
          sorter: (a, b) => a.shownAndNonConsented.length - b.shownAndNonConsented.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 
          <span>
                  <span className="question-circle"> 
              <Tooltip title="Gdpr Popup Ctr">
              <Icon type="question-circle" /> 
              </Tooltip>
              </span> 
          <span className="title">Gdpr Popup Ctr</span>
          </span>,
          dataIndex: 'gdprPopupCtr',
          sorter: (a, b) => a.gdprPopupCtr.length - b.gdprPopupCtr.length,
          sortDirections: ['descend', 'ascend'],
        },
      ];
      const data = this.getData();
      console.log(data);
    function onChange( filters, sorter) {
      console.log('params', sorter);
    }
  return(
    <Card style={{ margin: '40px 0', borderRadius: '5px'}} className="datatable">
        <Table columns={columns} dataSource={data} onChange={onChange} />
    </Card>
  )
}
}

export default DetailTable;
