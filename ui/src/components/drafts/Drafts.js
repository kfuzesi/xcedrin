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
      demandListDrafts: {},
      demandListNames :[]
    };
    this.updateNavbar = this.updateNavbar.bind(this);
  }
 
// getDemands(draft_id) {
//	 fetch('http://localhost:8080/demands/drafts/' + )
//	   .then(results => results.json())
//	   .then(aryOfDrafts => {
// }
	   
 componentDidMount() {
   fetch('http://localhost:8080/drafts')
   .then(results => results.json())
   .then(aryOfDrafts => {
	   let draftObject = aryOfDrafts.reduce(function(map, obj) {
		     //getDemands(obj.id);
		    map[obj.name] = obj;
		    return map;
		}, {});
	   let draftNames = aryOfDrafts.map((item) => {
		   return (item.name)
	   })
       this.setState({demandListDrafts : draftObject, demandListNames : draftNames});
       this.updateNavbar(draftNames[0]);
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
	   case 'New Draft':
		  return (<div></div>)
	   case '' :
		   return (<div></div>)
	   default:
		 let currentDraft = this.state.demandListDrafts[section];
		 console.log(currentDraft);
	     return (
	      <div>
	        <div className="draft-content">
	        </div>
	        <div className="add-demand" onClick={(e) => this.updateNavbar('Builder')}>+ Add Demand</div>
	      </div>
	    )
	}
  }

  render() {
    return(
      <div className="drafts">
        <Navbar
          className="drafts-navbar"
          title={'Drafts'}
          items={this.state.demandListNames}
          updateNavbar={this.updateNavbar}
          curSelected={this.state.curSection}>
        </Navbar>
        <div className="drafts-content">
          <h2 className="drafts-content-title">{this.state.curSection}</h2>
          
          <hr />
          {this.renderSection(this.state.curSection)}
        </div>
      </div>
    );
  }
}

