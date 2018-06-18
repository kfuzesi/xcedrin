import React, { Component } from 'react';
import './Demand.css';
import Builder from '../builder/Builder';
import Navbar from '../navbar/Navbar';

export default class Demand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSection: 'All',
      stateArrOfDemands: [],
    };
    this.updateNavbar = this.updateNavbar.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/demands')
      .then(results => results.json())
      .then(arrOfDemands => {
        let localArrayOfDemands = arrOfDemands.map((eachDemand) => {
            return (
              <div key={eachDemand.bu}>
                <h2> {eachDemand.bu}, {eachDemand.location}, {eachDemand.num_tickets}</h2>
                <h2> {eachDemand.onboarding_quarter}, {eachDemand.req_title} </h2>
                <h2> {eachDemand.specialty}, {eachDemand.track}</h2>
              </div>
            )
        });
        this.setState({ stateArrOfDemands : localArrayOfDemands});
    })
  }

  updateNavbar(name) {
    this.setState({ curSection: name });
  }

  renderSection(section) {
    switch (section) {
      case 'All':
        return (
          <div>
            {/* <DataTable></DataTable> */}
            {this.state.stateArrOfDemands.map((demand) => {
              return (
                <div>
                  <h2>{demand}</h2>
                  <hr />
                </div>
              )
            })}
          </div>
        )
      case 'Drafts':
        return (
          <div>
            {/* <DataTable></DataTable> */}
          </div>
        )
      case 'Builder':
        return (
          <Builder></Builder>
        )
      default:
        return '';
    }
  }

  render() {
    return(
      <div className="demand">
        <Navbar
          className="demand-navbar"
          title={'Demand'}
          items={['All', 'Drafts', 'Builder']}
          updateNavbar={this.updateNavbar}
          curSelected={this.state.curSection}>
        </Navbar>
        <div className="demand-content">
          <h2 className="demand-content-title">{this.state.curSection}</h2>
          <hr />
          {this.renderSection(this.state.curSection)}
        </div>
      </div>
    );
  }
}

