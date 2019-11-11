import React, { Component } from "react";

import Title from '../../Components/Title/Title';
import Toolbar from '../../Components/Toolbar/Toolbar';
import Overview from '../../Components/Overview/Overview';
import DataChart from '../../Components/DataChart/DataChart';
import DetailTable from '../../Components/DetailTable/DetailTable';

class Report extends Component {

  state = {
    totalPageViews: [
    {
    date: '2019-09-22',
    totalPageView: '845,850',
    estimatedEuRevinew:'$38,25',
    nonEuPageviews:'645,852',
    euPageviews:'100,285',
    priviouslyConsented:'85,680',
    shownAndConsented:'10,000',
    shownAndNonConsented:'4,384',
    gdprPopupCtr:'10.00%'
    },
    {
        date: '2019-09-23',
        totalPageView: '725,255',
        estimatedEuRevinew:'$45.25',
        nonEuPageviews:'542,000',
        euPageviews:'183,255',
        priviouslyConsented:'145,680',
        shownAndConsented:'32,456',
        shownAndNonConsented:'5,119',
        gdprPopupCtr:'17.71%'
        },
        {
            date: '2019-09-24',
            totalPageView: '608,000',
            estimatedEuRevinew:'$34.68',
            nonEuPageviews:'580,000',
            euPageviews:'135,000',
            priviouslyConsented:'85,680',
            shownAndConsented:'45,000',
            shownAndNonConsented:'5,000',
            gdprPopupCtr:'33.33%'
            },
            {
                date: '2019-09-25',
                totalPageView: '845,850',
                estimatedEuRevinew:'$38,25',
                nonEuPageviews:'645,852',
                euPageviews:'100,028',
                priviouslyConsented:'85,680',
                shownAndConsented:'10,000',
                shownAndNonConsented:'4,384',
                gdprPopupCtr:'10.00%'
                },
                {
                    date: '2019-09-26',
                    totalPageView: '725,255',
                    estimatedEuRevinew:'$45,25',
                    nonEuPageviews:'542,000',
                    euPageviews:'182,255',
                    priviouslyConsented:'145,680',
                    shownAndConsented:'32,456',
                    shownAndNonConsented:'5119',
                    gdprPopupCtr:'17.71%'
                    },
                    {
                        date: '2019-09-27',
                        totalPageView: '608,000',
                        estimatedEuRevinew:'$34,68',
                        nonEuPageviews:'580,000',
                        euPageviews:'135,000',
                        priviouslyConsented:'85,680',
                        shownAndConsented:'45,000',
                        shownAndNonConsented:'5,000',
                        gdprPopupCtr:'33.33%'
                        },
                        {
                            date: '2019-09-28',
                            totalPageView: '845,850',
                            estimatedEuRevinew:'$38,25',
                            nonEuPageviews:'645,852',
                            euPageviews:'100,285',
                            priviouslyConsented:'85,680',
                            shownAndConsented:'10,000',
                            shownAndNonConsented:'4,384',
                            gdprPopupCtr:'10.00%'
                            },
    ]
    }
  

  render() {
    let data = this.state.totalPageViews.map(d => {
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
            <Title />
            <Toolbar />
            <Overview />
            <DataChart />
            <DetailTable />
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
           <tbody>{data}</tbody>
           </table>
        </div>
    );
  }
}

export default Report;
