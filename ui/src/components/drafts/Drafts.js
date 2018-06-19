import React, { Component } from 'react';
import './Drafts.css';
import Builder from '../builder/Builder';
import Navbar from '../navbar/Navbar';

export default class Drafts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSection: '',
      stateArrOfDemands: [],
      demandListDrafts: [],
    };
    this.updateNavbar = this.updateNavbar.bind(this);
  }
 
 componentDidMount() {
   fetch('http://localhost:8080/drafts')
   .then(results => results.json())
   .then(aryOfDrafts => {
       let draftArray = aryOfDrafts.map((eachDraft) => {
           return(eachDraft.name)
       });
       this.setState({demandListDrafts : draftArray});
       this.setState({curSection : draftArray[0]});
       this.updateNavbar(draftArray[0]);
       console.log(draftArray[0]);
   });
  }

  updateNavbar(name) {
    this.setState({ curSection: name });
  }
  
  renderSection(section) {
	switch (section) {
	   case 'Builder':
	     return (
	       <Builder></Builder>
	     )   
	   default:
	     return(
	      <div>
	        <div className="draft-content"></div>
	        <div className="add-demand" onClick={(e) => this.updateNavbar('Builder')}>+ Add Demand</div>
	      </div>
	    );
	}
  }

  render() {
    return(
      <div className="demand">
        <Navbar
          className="demand-navbar"
          title={'Drafts'}
          items={this.state.demandListDrafts}
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

