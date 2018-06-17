import React, { Component } from 'react';
import './Demand.css';
import Builder from '../builder/Builder';


export default class Demand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSection: 'All',
      stateArrOfDemands: [],
    };
  }
  componentDidMount() {
  fetch('http://localhost:8080/demands')
  .then(results => {
    return results.json();
    }).then(arrOfDemands => {
        let localArrayOfDemands = arrOfDemands.map((eachDemand) => {
            return (
            <div key={eachDemand.bu}>
             <h2> {eachDemand.bu}, {eachDemand.location}, {eachDemand.num_tickets}</h2>
             <h2> {eachDemand.onboarding_quarter}, {eachDemand.req_title} </h2>
             <h2> {eachDemand.specialty}, {eachDemand.track}</h2>
             </div>
            )
         });

        this.setState({ curSection: this.state.curSection, stateArrOfDemands : localArrayOfDemands});


    })

  }
  render() {
   if(this.state.curSection == ' '){
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
    } else{
        if(this.state.curSection == 'All'){
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
                    <h2> {this.state.stateArrOfDemands}</h2>
                </div>
              </div>
            );
        }
    }
  }
}

