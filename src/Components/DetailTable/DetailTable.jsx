import React, { Component } from "react";

import { Card,Table } from "antd";

import './DetailTable.less';


class DetailTable extends Component {  
  
  
  getData = () => {
    const {data } = this.props;
    return data
  };

  render() {
      const columns = [
        {
          title: 'Date',
          dataIndex: 'date',
          sorter: (a, b) => a.date.length - b.date.length,
          sortDirections: ['descend'],
        },
        {
          title: 'Total Page View',
          dataIndex: 'totalPageView',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.totalPageView - b.totalPageView,
        },
        {
          title: 'Estimated Eu Revinew',
          dataIndex: 'estimatedEuRevinew',
          sorter: (a, b) => a.estimatedEuRevinew.length - b.estimatedEuRevinew.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Non Eu Page views',
          dataIndex: 'nonEuPageviews',
          sorter: (a, b) => a.nonEuPageviews.length - b.nonEuPageviews.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Priviously Consented',
          dataIndex: 'priviouslyConsented',
          sorter: (a, b) => a.priviouslyConsented.length - b.priviouslyConsented.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Shown And Consented',
          dataIndex: 'shownAndConsented',
          sorter: (a, b) => a.shownAndConsented.length - b.shownAndConsented.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Shown And Non Consented',
          dataIndex: 'shownAndNonConsented',
          sorter: (a, b) => a.shownAndNonConsented.length - b.shownAndNonConsented.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Gdpr Popup Ctr',
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
