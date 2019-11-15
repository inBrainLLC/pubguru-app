import React, { Component } from "react";

import { Card,Table } from "antd";

class DetailTable extends Component {  
  
  
  getData = () => {
    const {data } = this.props;

    return data
  };


  // render() {
  //   let rows = this.props.data.map(d => {
      
  //       console.log(d);
  //       return (
  //         <tr>
  //           <td>{d.date}</td>
  //           <td>{d.totalPageView}</td>
  //           <td>{d.estimatedEuRevinew}</td>
  //           <td>{d.nonEuPageviews}</td>
  //           <td>{d.euPageviews}</td>
  //           <td>{d.priviouslyConsented}</td>
  //           <td>{d.shownAndConsented}</td>
  //           <td>{d.shownAndNonConsented}</td>
  //           <td>{d.gdprPopupCtr}</td>
  //         </tr>
  //       );
  //     });
  //   return (
  //       <Card style={{ margin: '40px 0', borderRadius: '5px' }}>
  //           <table border="1">
  //               <thead>
  //               <th>Date</th>
  //               <th>Total Page Views</th>
  //               <th>Estimated Eu Revinew</th>
  //               <th>Non Eu Page views</th>
  //               <th>Eu Page views</th>
  //               <th>Priviously Consented</th>
  //               <th>Shown And Consented</th>
  //               <th>Shown And non Consented</th>
  //               <th>Gdpr Popup Ctr</th>
  //             </thead>
  //               <tbody>{rows}</tbody>
  //            </table>
  //       </Card>
  //   );
  // }

     render() {


      const columns = [
        {
          title: 'Date',
          dataIndex: 'date',
          // specify the condition of filtering result
          // here is that finding the name started with `value`
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



  function onChange( filters, sorter, extra) {
    console.log('params', sorter, extra);
  }
  return(
   <Card style={{ margin: '40px 0', borderRadius: '5px'}}>
      <Table columns={columns} dataSource={data} onChange={onChange} />
  </Card>
  )
}
}

export default DetailTable;
