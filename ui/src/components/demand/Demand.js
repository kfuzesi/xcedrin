import React, { Component } from 'react';
import './Demand.css';
import Builder from '../builder/Builder';

export default class Demand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSection: '',
    };
  }

  render() {
    return(
      <div className="demand">
        <div className="demand-navbar">
          <div className="demand-navbar-title">Demand</div>
          <ul className="demand-ul">
            <li className="demand-li">All</li>
            <li className="demand-li">Drafts</li>
            <li className="demand-li">Builder</li>
          </ul>
        </div>
        <div className="demand-content">
          <h2 className="demand-content-title">{this.state.curSection}</h2>
          <hr />
          {/* <DataTable></DataTable> */}
          <Builder></Builder>
        </div>
      </div>
    );
  }
}

