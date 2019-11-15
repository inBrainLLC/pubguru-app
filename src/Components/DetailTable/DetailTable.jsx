import React, { Component } from "react";

import { Card,Table } from "antd";

class DetailTable extends Component {
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

      const data = [
        {
            //date: '2019-09-22', // transform this into unix time
            date: 1569085200000,
            totalPageView: 845850,
            estimatedEuRevinew: 38.25,
            nonEuPageviews: 645852,
            euPageviews: 100285,
            priviouslyConsented: 85680,
            shownAndConsented: 10000,
            shownAndNonConsented: 4384,
            gdprPopupCtr: 0.1,
        },
        {
            // date: '2019-09-23',
            date: 1569171600000,
            totalPageView: '725,255',
            estimatedEuRevinew: 45.25,
            nonEuPageviews: '542,000',
            euPageviews: '183,255',
            priviouslyConsented: '145,680',
            shownAndConsented: '32,456',
            shownAndNonConsented: '5,119',
            gdprPopupCtr: 0.1771,
        },
        {
            // date: '2019-09-24',
            date: 1569258000000,
            totalPageView: '608,000',
            estimatedEuRevinew: 34.68,
            nonEuPageviews: '580,000',
            euPageviews: '135,000',
            priviouslyConsented: '85,680',
            shownAndConsented: '45,000',
            shownAndNonConsented: '5,000',
            gdprPopupCtr: '33.33%'
        },
        {
            // date: '2019-09-25',
            date: 1569344400000,
            totalPageView: '845,850',
            estimatedEuRevinew: 38.25,
            nonEuPageviews: '645,852',
            euPageviews: '100,028',
            priviouslyConsented: '85,680',
            shownAndConsented: '10,000',
            shownAndNonConsented: '4,384',
            gdprPopupCtr: '10.00%'
        },
        {
            // date: '2019-09-26',
            date: 1569430800000,
            totalPageView: '725,255',
            estimatedEuRevinew: 45.25,
            nonEuPageviews: '542,000',
            euPageviews: '182,255',
            priviouslyConsented: '145,680',
            shownAndConsented: '32,456',
            shownAndNonConsented: '5119',
            gdprPopupCtr: '17.71%'
        },
        {
            // date: '2019-09-27',
            date: 1569517200000,
            totalPageView: '608,000',
            estimatedEuRevinew: 34.68,
            nonEuPageviews: '580,000',
            euPageviews: '135,000',
            priviouslyConsented: '85,680',
            shownAndConsented: '45,000',
            shownAndNonConsented: '5,000',
            gdprPopupCtr: '33.33%'
        },
        {
            // date: '2019-09-28',
            date: 1569603600000,
            totalPageView: '845,850',
            estimatedEuRevinew: 38.25,
            nonEuPageviews: '645,852',
            euPageviews: '100,285',
            priviouslyConsented: '85,680',
            shownAndConsented: '10,000',
            shownAndNonConsented: '4,384',
            gdprPopupCtr: '10.00%'
        },
    ];
  
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
