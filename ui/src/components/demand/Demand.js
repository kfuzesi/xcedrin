import React, { Component } from 'react';
import './Demand.css';
import Builder from '../builder/Builder';
import Navbar from '../navbar/Navbar';
import Table from 'rc-table';
import 'rc-table/assets/index.css';
export default class Demand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSection: 'All',
      demandsInJson:[],
    };
    this.updateNavbar = this.updateNavbar.bind(this);
  }
  getColumns(){
    return [{title: "Id", dataIndex: "id", key: "id", width: 100, },
            {title: "Draft_id", dataIndex: "draft_id", key: "draft_id", width: 100, },
            {title: "Bu_rep", dataIndex: "bu_rep", key: "bu_rep", width: 100, },
            {title: "Subgroup", dataIndex: "subgroup", key: "subgroup", width: 100, },
            {title: "Vp", dataIndex: "vp", key: "vp", width: 100, },
            {title: "Foreign_nationals", dataIndex: "foreign_nationals", key: "foreign_nationals", width: 100, },
            {title: "Track", dataIndex: "track", key: "track", width: 100, },
            {title: "Req_title", dataIndex: "req_title", key: "req_title", width: 100, },
            {title: "Specialty", dataIndex: "specialty", key: "specialty", width: 100, },
            {title: "Location", dataIndex: "location", key: "location", width: 100, },
            {title: "Num_tickets", dataIndex: "num_tickets", key: "num_tickets", width: 100, },
            {title: "Onboarding_quarter", dataIndex: "onboarding_quarter", key: "onboarding_quarter", width: 100, },
            {title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="#">Modify</a>,}];
   }
   getData(){
                return this.state.demandsInJson;
   }
  componentDidMount() {
    fetch('http://localhost:8080/demands')
          .then(results => results.json())
          .then(arrOfDemands => {
             this.setState({ demandsInJson : arrOfDemands});
          });

  }

  updateNavbar(name) {
    this.setState({ curSection: name });
  }

  renderSection(section) {
    var columns = this.getColumns();
    var data = this.getData();
    switch (section) {
      case 'All':
            return (
                 <div>
                       <Table columns={columns} data={data} />
                 </div>
               )
      case 'Drafts':
        return (
          <div>
                <Table columns={columns} data={data} />
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

