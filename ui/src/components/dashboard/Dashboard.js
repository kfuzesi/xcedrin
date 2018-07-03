import React, { Component } from 'react';

import './Dashboard.css';
import Table from 'rc-table';
import 'rc-table/assets/index.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSection: 'All',
      demands: [],
      error: false
    };
  }
  getColumns(){
	    return [
        {title: "BU", dataIndex: "bu", key: "bu", width: 100, },
        {title: "Subgroup", dataIndex: "subgroup", key: "subgroup", width: 100, },
        {title: "VP", dataIndex: "vp", key: "vp", width: 100, },
        {title: "Foreign Nationals", dataIndex: "foreign_nationals", key: "foreign_nationals", width: 100, },
        {title: "Track", dataIndex: "track", key: "track", width: 100, },
        {title: "Req Title", dataIndex: "req_title", key: "req_title", width: 100, },
        {title: "Specialty", dataIndex: "specialty", key: "specialty", width: 100, },
        {title: "Location", dataIndex: "location", key: "location", width: 100, },
        {title: "Num Tickets", dataIndex: "num_tickets", key: "num_tickets", width: 100, },
        {title: "Onboarding Quarter", dataIndex: "onboarding_quarter", key: "onboarding_quarter", width: 100, },
        {title: 'Operations', dataIndex: '', key:'operations', render: () => <button>Modify</button>,}
      ];
   }
  componentDidMount() {
    fetch('http://localhost:8080/demands')
      .then(results => results.json())
      .then(arr => {
        this.setState({ demands : arr});
      })
      .catch(e => {
        console.log('Error!', e);
        this.setState({
          error: true
        })
      });
  }

  render() {
    var columns = this.getColumns();
    const { demands, error } = this.state;
    return (
      <div className="dashboard">
        { error ?
          <div className="error">
            <h3>Cannot get resources</h3>
            <a href="/">Back</a>
          </div>
          :
          <div className="dashboard-table">
            <Table columns={ columns } data={ demands } />
          </div>
        }
      </div>
    );
  }
}
