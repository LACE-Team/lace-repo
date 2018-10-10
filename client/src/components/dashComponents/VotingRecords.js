import React from 'react';
import { Table } from 'react-bootstrap';

const styles = {};

styles.rightA = {
  'margin-right': '0px',
};

const VotingRecords = ({ customStyle }) => (
  <article style={customStyle} className="center br3 hidden ba b--black-10 mv4 w-90">
    <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Voting Records</h1>
    <div className="pa3 bt b--black-10">
      <a target='_blank' rel="noopener noreferrer" href="https://www.ola.org/en/legislative-business/bills/parliament-42/session-1/bill-2">Bill 2, Urgent Priorities Act, 2018"</a>
      <Table responsive bordered condensed className='f6 black-70' >
        <thead>
          <tr>
            <th>Date</th>
            <th>Bill Stage</th>
            <th>Activity</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>July 16, 2018</td>
            <td>First Reading</td>
            <td>Carried</td>
            <td>''''</td>
          </tr>
          <tr>
            <td>July 25, 2018</td>
            <td>Second Reading</td>
            <td>Carried on Division</td>
            <td>''''</td>
          </tr>
          <tr>
            <td>July 25, 2018</td>
            <td>Third Reading</td>
            <td>Carried on Division</td>
            <td>''''</td>
          </tr>
        </tbody>
      </Table>
      <a target='_blank' rel="noopener noreferrer" href="https://www.ola.org/en/legislative-business/bills/parliament-42/session-1/bill-5'">Bill 5, Better Local Government Act, 2018 </a>
      <Table responsive bordered condensed className="f6 black-70">
        <thead>
          <tr>
            <th>Date</th>
            <th>Bill Stage</th>
            <th>Activity</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>July 30, 2018</td>
            <td>First Reading</td>
            <td>Carried on Division</td>
            <td>''''</td>
          </tr>
          <tr>
            <td>August 14, 2018</td>
            <td>Time Allocation</td>
            <td>Carried on Division</td>
            <td>''''</td>
          </tr>
          <tr>
            <td>August 14, 2018</td>
            <td>Second Reading</td>
            <td>Carried on Division</td>
            <td>''''</td>
          </tr>
          <tr>
            <td>August 14, 2018</td>
            <td>Third Reading</td>
            <td>Carried on Division</td>
            <td>''''</td>
          </tr>
        </tbody>
      </Table>
      <a target='_blank' rel="noopener noreferrer" href="https://www.ola.org/en/legislative-business/bills/parliament-42/session-1/bill-27">Bill 27, Waterways Examination Act, 2018</a>
      <Table responsive bordered condensed className='f6 black-70'>
        <thead>
          <tr>
            <th>Date </th>
            <th>Bill Stage</th>
            <th>Activity</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>August 9, 2018</td>
            <td>First Reading</td>
            <td>Carried on Division</td>
          </tr>
        </tbody>
      </Table>;
    </div>
  </article>
);

export default VotingRecords;
