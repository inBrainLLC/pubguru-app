import React, { Component } from "react";

import { Card } from "antd";

class DetailTable extends Component {
  render() {
    let rows = this.props.data.map(d => {
      
        console.log(d);
        return (
          <tr>
            <td>{d.date}</td>
            <td>{d.totalPageView}</td>
            <td>{d.estimatedEuRevinew}</td>
            <td>{d.nonEuPageviews}</td>
            <td>{d.euPageviews}</td>
            <td>{d.priviouslyConsented}</td>
            <td>{d.shownAndConsented}</td>
            <td>{d.shownAndNonConsented}</td>
            <td>{d.gdprPopupCtr}</td>
          </tr>
        );
      });
    return (
        <Card style={{ margin: '40px 0', borderRadius: '5px' }}>
            <table border="1">
                <thead>
                <th>Date</th>
                <th>Total Page Views</th>
                <th>Estimated Eu Revinew</th>
                <th>Non Eu Page views</th>
                <th>Eu Page views</th>
                <th>Priviously Consented</th>
                <th>Shown And Consented</th>
                <th>Shown And non Consented</th>
                <th>Gdpr Popup Ctr</th>
              </thead>
                <tbody>{rows}</tbody>
             </table>
        </Card>
    );
  }
}

export default DetailTable;
