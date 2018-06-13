import React, { Component } from 'react';
import './Dashboard.css';

import { DataTable } from 'carbon-components-react';
const { Table, TableHead, TableHeader, TableBody, TableCell, TableContainer, TableRow } = DataTable;

const headers = [
  {
    key: 'bu',
    header: 'BU',
  },
  {
    key: 'pos_location',
    header: 'Location',
  },
  {
    key: 'track',
    header: 'Track',
  },
  {
    key: 'title',
    header: 'Title',
  },
  {
    key: 'specialty',
    header: 'Specialty',
  },
  {
    key: 'degree',
    header: 'Degree',
  },
  {
    key: 'onboard_month',
    header: 'Onboard Month',
  },
  {
    key: 'salary',
    header: 'Salary',
  },
  {
    key: 'num_avail',
    header: '# Available',
  },
];

const rows = [
  {
    id: 'a',
    bu: 'bu-1',
    pos_location: 'ykt',
    track: 'Developer',
    title: 'SWE',
    specialty: 'Nothing',
    degree: 'CS',
    onboard_month: 'Jun',
    salary: '$5',
    num_avail: '404',
  },
];

export default class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard">
        <div className="dashboard-summary">
          <div className="dashboard-summary-title">Demand Summary</div>
        </div>
        <div className="dashboard-table">
          <div className="table-title">All Demand</div>
        </div>
      </div>
    );
  }
}
//          <DataTable
//            headers={headers}
//            rows={rows}
//            render={renderTable(rows, headers)}
//          />

//          {headers.map(header => (
//            <TableHeader>{header.header}</TableHeader>
//          ))}
const renderTable = ({ rows, headers }) => (
  <TableContainer title="DataTable">
    <Table>
      <TableHead>
        <TableRow>
        </TableRow>
      </TableHead>

      <TableBody>
      </TableBody>
    </Table>
  </TableContainer>
);

//        {rows.map(row => (
//          <TableRow key={row.id}>
//            {row.cells.map(cell => (
//              <TableCell key={cell.id}>{cell.value}</TableCell>
//            ))}
//          </TableRow>
//        ))}
