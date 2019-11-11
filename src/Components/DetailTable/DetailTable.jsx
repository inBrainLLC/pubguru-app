import React, { Component } from "react";

class DetailTable extends Component {
  render() {
    let rows = this.props.data.map(d => {
        return (
          <tr key={d.date}>
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
        <div>
            <table border="1">
                <tbody>{rows}</tbody>
             </table>
        </div>
    );
  }
}

export default DetailTable;
