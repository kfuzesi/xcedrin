import React, { Component } from 'react';
import './Drafts.css';
import Builder from '../builder/Builder';
import Navbar from '../navbar/Navbar';
import Table from 'rc-table';
import 'rc-table/assets/index.css';

export default class Drafts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSection: '',
      stateArrOfDemands: [],
      draftNames :[],
      draftMap: {},
      demandsInJson : []
    };
    this.updateNavbar = this.updateNavbar.bind(this);
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

 getData(draft_id){
	 let draftDemand = [];
	 this.state.demandsInJson.map((item) => {
		 if (item.draft_id === draft_id) {
			 draftDemand.push(item)
		 }
	 })
	 console.log(draftDemand);
	 return draftDemand;
 }
	   
 getDemands(draft_id) {
	 var temp = fetch('http://localhost:8080/demands/drafts/' + draft_id)
	   .then(results => results.json())
	   .then(aryOfDemands => {
		   return aryOfDemands;
	 })
	 return temp;
 }
 
 componentDidMount() {
   fetch('http://localhost:8080/drafts')
   .then(results => results.json())
   .then(aryOfDrafts => {
	   let draftMap = aryOfDrafts.reduce((map, obj) => {
		   map[obj.name] = obj.id;
		   return map;
	   }, {});
	   let draftNames = aryOfDrafts.map((item) => {
		   return (item.name)
	   })
       this.setState({
            curSection: draftNames[0],
       		draftNames : draftNames, 
       		draftMap : draftMap});
       this.updateNavbar(draftNames[0]);
   });
   fetch('http://localhost:8080/demands')
	   .then(results => results.json())
	   .then(arr => {
	      this.setState({ demandsInJson : arr});
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
	     return (
	      <div>
	        <div className="draft-content">
	        	<Table columns={this.getColumns()} data={this.getData(this.state.draftMap[section])} />
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
          items={this.state.draftNames}
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

