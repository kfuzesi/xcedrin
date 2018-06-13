import React, { Component } from 'react';
import './Builder.css';
import CandidateStage from './candidate/CandidateStage';
import PositionStage from './position/PositionStage';
import OptionsList from './options-list/OptionsList';
import LocationStage from './location/LocationStage';

// import { DataTable } from 'carbon-components-react';
export default class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curStep: 1,
      form: {}
    };
    this.incrementStep = this.incrementStep.bind(this);
    this.decrementStep = this.decrementStep.bind(this);
  }

  stageSwitch() {
    const stage = stages[this.state.curStep - 1];
    const type = stage.type;
    
    switch (type) {
      case 'list':
        return <OptionsList
                  field={stage.field}
                  options={stage.options}
                  incrementStep={this.incrementStep}
                  decrementStep={this.decrementStep}
                  updateForm={this.updateForm}
               ></OptionsList>;
      case 'location':
        return <LocationStage
                  field={stage.field}
                  updateForm={this.updateForm}
               ></LocationStage>;
      case 'position':
        return <PositionStage
                  field={stage.field}
                  options={stage.options}
                  incrementStep={this.incrementStep}
                  decrementStep={this.decrementStep}
                  updateForm={this.updateForm}
               ></PositionStage>;
      case 'candidate':
        return <CandidateStage
                  field={stage.field}
                  updateForm={this.updateForm}
               ></CandidateStage>;
      default:
        return '';
    }
  }

  updateForm(data) {
    return function() {
      this.setState({
        form: Object.assign({}, this.state.form, data)
      });
    }
  }

  incrementStep() {
    this.setState({
      curStep: this.state.curStep < stages.length ? this.state.curStep + 1 : stages.length,
    });
    console.log(this.state);
  }

  decrementStep() {
    this.setState({
      curStep: this.state.curStep > 1 ? this.state.curStep - 1 : 1,
    });
  }

  render() {
    return(
      <div className="demand-builder">
        <div className="builder-step-title">{stages[this.state.curStep - 1].title}</div>
        <p className="builder-step-num">step {this.state.curStep} of {stages.length}</p>
        <div className="builder-stage">
          {this.stageSwitch()}
        </div>
        <div className="builder-nav">
          <div className="builder-back" onClick={this.decrementStep}>Prev</div>
          <div className="builder-forw" onClick={this.incrementStep}>Next</div>
        </div>
      </div>
    );
  }
}

const stageComponentMap = {
  list: ""
};

const stages = [
  {
    title: 'Select a track',
    field: 'track',
    type: 'list',
    options: [
      'Consultant',
      'Corporate Strategy',
      'Data Scientist',
      'Designer',
      'Developer',
      'Offering Manager',
      'Seller',
      'Track Unaligned'
    ],
  },
  {
    title: 'Select a profile',
    field: 'profile',
    type: 'list',
    options: [
      'Entry Level Software Developer',
      'Entry-Level UX Designer and Front End Developer'
    ],
  },
  {
    title: 'Select a speciality',
    field: 'specialty',
    type: 'list',
    options: [
      'Automation Development and Testing',
      'Backend, Server Systems, or Cloud-Based Development',
      'Client-Facing Assistance and Solution Development',
      'Firmware Development',
      'Front End Development',
      'Full Stack Development'
    ],
  },
  {
    title: 'Select locations',
    field: 'location',
    type: 'location'
  },
  {
    title: 'Position details',
    field: 'position',
    type: 'position',
    options: [
      {
        title: 'Band',
        placeholder: '06 - 07'
      },
      {
        title: 'Required Degree',
        placeholder: 'BS'
      },
      {
        title: 'Onboarding Month',
        placeholder: 'June, July, August' // this should be a calendar month selector
      },
    ]
  },
  {
    title: 'Candidate characteristics/competencies',
    field: 'candidate',
    type: 'candidate',
  },
];
