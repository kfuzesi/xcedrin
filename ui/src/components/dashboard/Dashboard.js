import React, { Component } from 'react';
import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard">
        <div className="dashboard-summary">
          <div className="dashboard-summary-title">Demand Summary</div>
        </div>
        <div className="dashboard-table">
          <div className="dashboard-table-title">All Demand</div>
        </div>
      </div>
    );
  }
}

