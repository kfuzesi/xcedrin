import React, { Component } from 'react';
import './Builder.css';
import CandidateStage from './candidate/CandidateStage';
import PositionStage from './position/PositionStage';
import OptionsList from './options-list/OptionsList';
import LocationStage from './location/LocationStage';
import SubgroupStage from './subgroup/SubgroupStage';
import Draft from '../draft/Draft';

const stages = [
  { 
	title: 'Enter a subgroup',
	field: 'subgroup',
	type: 'subgroup'
  },
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
      'Default profile',
//      'Entry Level Software Developer',
//      'Entry-Level UX Designer and Front End Developer'
    ],
  },
  {
    title: 'Select a speciality',
    field: 'specialty',
    type: 'list',
    options: [
      'Default specialties',
      // 'Automation Development and Testing',
      // 'Backend, Server Systems, or Cloud-Based Development',
      // 'Client-Facing Assistance and Solution Development',
      // 'Firmware Development',
      // 'Front End Development',
      // 'Full Stack Development'
    ],
  },
  {
    title: 'Further Information',
    field: 'location',
    type: 'location'
  },
//  {
//    title: 'Position details',
//    field: 'position',
//    type: 'position',
//    options: [
//      {
//        title: 'Band',
//        placeholder: '06 - 07'
//      },
//      {
//        title: 'Required Degree',
//        placeholder: 'BS'
//      },
//      {
//        title: 'Onboarding Month',
//        placeholder: 'June, July, August' // this should be a calendar month selector
//      },
//    ]
//  },
//  {
//    title: 'Candidate qualifications',
//    field: 'candidate',
//    type: 'candidate',
//  },
  {
    title: 'Summary',
    field: 'draft',
    type: 'draft',
  },
];

const profileSpecialties = {
  'Entry Level Software Developer': [
    'Automation Development and Testing',
    'Backend, Server Systems, or Cloud-Based Development',
    'Client-Facing Assistance and Solution Development',
    'Firmware Development',
    'Front End Development',
    'Full Stack Development'
  ],
  'Entry-Level UX Designer and Front End Developer': [
    'UX Designer',
    'Design Researcher',
    'Visual Designer',
    'Front-End Developer',
    'Content Designer'
  ],
};

const profiles = {
  'Consultant': [
	  'CBD Analytics Consultant - Commercial Sector',
	  'CBD Cognitive Consultant - Commercial Sector',
	  'CBD Cognitive Consultant - Public Service Sector',
	  'CBD Cyber Security Specialist - Public Service Sector',
	  'CBD Design Consultant - Commercial Sector',
	  'CBD Digital Strategy & Interactive Consultant - Public Service Sector',
	  'CBD Enterprise Applications Consultant - Public Service Sector',
	  'CBD Enterprise Apps Consultant Commercial Sector',
	  'CBD Technical Consultant - Commercial Sector',
	  'CBD Technical Consultant - Public Service Sector',
	  'CBD Transformation Consultant-Commercial Sector',
	  'Entry-Level Consultant - CBD',
	  'IBM Digital Strategy, Senior Strategy Consultant',
	  'IBM Cognitive Business Decision Support -Cognitive Engineer Consultant',
	  'IBM Strategy and Change Internal Practice (SCIP), Senior Consultant',
	  'IBM Digital iX & Cognitive, Public - Cognitive Senior Consultant',
	  'IBM Digital iX & Cognitive, Public - Digital Senior Consultant'
   ],
   'Corporate Strategy': ['Corporate Strategy Placeholder'],
   'Data Scientist': ['Entry-Level Data Scientist'],
   'Developer': [
	   'Entry-Level Cognitive Software Developer',
	   'Entry-Level DevOps Developer',
	   'Entry-Level Site Reliability Engineer',
	   'Entry-Level Software Developer',
	   'Entry-Level UX Designer and Front End Developer'
    ],
    'Offering Manager': [
    	'Finance Professional',
    	'Human Resources Professional',
    	'Procurement Professional',
    	'Business Analyst',
    	'Digital Marketing & Marketing Analytics Professional',
    	'Strategy Consultant',
    	'Communications',
    	'Associate Offering Manager Program'
    ],
    'Seller': [
    	'Summit Digital Sales',
    	'Summit Senior Client Relationship Rep ',
    	'Summit Technical Sales'
    ]
};

export default class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curStep: 1,
      form: {
        track: '',
        profile: '',
        speciality: '',
        location: null,
        position: null,
        qualifications: null,
      }
    };
    this.incrementStep = this.incrementStep.bind(this);
    this.decrementStep = this.decrementStep.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  stageSwitch() {
    const stage = stages[this.state.curStep - 1];
    const type = stage.type;
    
    switch (type) {
      case 'subgroup':
    	  return <SubgroupStage
    	  	field={stage.field}
          	updateForm={this.updateForm}
    	  ></SubgroupStage>;
      case 'list':
        if (stage.field == 'specialty' && this.state.form.profile in profileSpecialties) {
          return <OptionsList
                    field={stage.field}
                    options={profileSpecialties[this.state.form.profile]}
                    incrementStep={this.incrementStep}
                    decrementStep={this.decrementStep}
                    updateForm={this.updateForm}
                ></OptionsList>;
        } else if (stage.field == 'profile' && this.state.form.track in profiles) {
            return <OptionsList
            field={stage.field}
            options={profiles[this.state.form.track]}
            incrementStep={this.incrementStep}
            decrementStep={this.decrementStep}
            updateForm={this.updateForm}
        ></OptionsList>;
        } else {
          return <OptionsList
                    field={stage.field}
                    options={stage.options}
                    incrementStep={this.incrementStep}
                    decrementStep={this.decrementStep}
                    updateForm={this.updateForm}
                ></OptionsList>;
        }
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
      case 'draft':
        return <Draft></Draft>;
      default:
        return '';
    }
  }

  updateForm(data) {
    this.setState({
      form: Object.assign({}, this.state.form, data)
    });
  }

  incrementStep() {
    this.setState({
      curStep: this.state.curStep < stages.length ? this.state.curStep + 1 : stages.length,
    });
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
