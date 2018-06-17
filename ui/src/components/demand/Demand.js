import React, { Component } from 'react';
import './Demand.css';
import Builder from '../builder/Builder';

export default class Demand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSection: '',
      pictures: [],
    };
  }
  componentDidMount() {
  fetch('http://localhost:8080/demands')
  .then(results => {
    return results.json();
    }).then(data => {
        let pictures = data.map((pic) => {
            return (
            <div>
             <div>demand: {pic}</div>
             </div>
            )
         })
        this.setState({picture:pictures});
        console.log("state was", this.state.pictures);
    })

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
          {this.state.pictures}
          <Builder></Builder>
        </div>
      </div>
    );
  }
}

