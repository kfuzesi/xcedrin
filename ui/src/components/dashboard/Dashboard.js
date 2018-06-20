import React, { Component } from 'react';
import './Dashboard.css';

import { DataTable } from 'carbon-components-react';
import Table from 'rc-table';
import 'rc-table/assets/index.css';
//const { Table, TableHead, TableHeader, TableBody, TableCell, TableContainer, TableRow } = DataTable;

export default class Dashboard extends Component {
constructor(props) {
    super(props);
    this.state = {
      curSection: 'All',
      demandsInJson:[],
    };
  }
  getColumns(){
	    return [{title: "BU", dataIndex: "bu", key: "bu", width: 100, },
            {title: "Subgroup", dataIndex: "subgroup", key: "subgroup", width: 100, },
            {title: "VP", dataIndex: "vp", key: "vp", width: 100, },
            {title: "Foreign Nationals", dataIndex: "foreign_nationals", key: "foreign_nationals", width: 100, },
            {title: "Track", dataIndex: "track", key: "track", width: 100, },
            {title: "Req Title", dataIndex: "req_title", key: "req_title", width: 100, },
            {title: "Specialty", dataIndex: "specialty", key: "specialty", width: 100, },
            {title: "Location", dataIndex: "location", key: "location", width: 100, },
            {title: "Num Tickets", dataIndex: "num_tickets", key: "num_tickets", width: 100, },
            {title: "Onboarding Quarter", dataIndex: "onboarding_quarter", key: "onboarding_quarter", width: 100, },
            {title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="#">Modify</a>,}];
   }
  
   getData(){
                return this.state.demandsInJson;
   }
   
   componentDidMount() {
    fetch('http://localhost:8080/demands')
          .then(results => results.json())
          .then(arr => {
             this.setState({ demandsInJson : arr});
          });
//    fetch('http://localhost:8080/drafts')
//                    .then(results => results.json())
//                    .then(arr => {
//                       this.setState({ draftsInJson : arr});
//                    });


  }
  
  render() {
	var columns = this.getColumns();
	var data = this.getData();
    return(
      <div className="dashboard">
        <div className="dashboard-table">
        	<Table columns={columns} data={data} />
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
//const renderTable = ({ rows, headers }) => (
//  <TableContainer title="DataTable">
//    <Table>
//      <TableHead>
//        <TableRow>
//        </TableRow>
//      </TableHead>
//
//      <TableBody>
//      </TableBody>
//    </Table>
//  </TableContainer>
//);

//        {rows.map(row => (
//          <TableRow key={row.id}>
//            {row.cells.map(cell => (
//              <TableCell key={cell.id}>{cell.value}</TableCell>
//            ))}
//          </TableRow>
//        ))}
