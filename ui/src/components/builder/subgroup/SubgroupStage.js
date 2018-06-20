import React, { Component } from 'react';
import './SubgroupStage.css';

import {
	  RadioButton,
	  RadioButtonGroup,
	  TextInput
} from 'carbon-components-react';

export default class SubgroupStage extends Component {
	
	onChange() {
	    console.log('radio changed');
	}
	
  render() {
    return(
      <div className="subgroup-stage">
				<div className="subgroup-stage-title">Requisition Title</div>
      	<div className="subgroup-input">
      		<TextInput
						onChange={evt => this.props.updateForm({req_title: evt.target.value})}
      			className="form-text-input subgroup-text-input"
      			id="req_title"
      			placeholder="Req Title"
					/>
      	</div>
				<div className="subgroup-stage-title">Business Unit</div>
      	<div className="subgroup-input">
      		<TextInput
						onChange={evt => this.props.updateForm({bu: evt.target.value})}
      			className="form-text-input subgroup-text-input"
      			id="bu"
      			placeholder="Business Unit"
					/>
      	</div>
				<div className="subgroup-stage-title">Subgroup</div>
      	<div className="subgroup-input">
      		<TextInput
						onChange={evt => this.props.updateForm({subgroup: evt.target.value})}
      			className="form-text-input subgroup-text-input"
      			id="subgroup"
      			placeholder="Subgroup Name"
					/>
      	</div>
      	<div className="subgroup-stage-title">Receiving VP</div>
      	<div className="subgroup-input">
      		<TextInput
						onChange={evt => this.props.updateForm({vp: evt.target.value})}
						className="form-text-input subgroup-text-input"
						id="vp"
						placeholder="VP's Name"
					/>
      	</div>
      	<div className="subgroup-input">
      		<div className="subgroup-stage-title">Can this subgroup support foreign nationals?</div>
		      <RadioButtonGroup
						// onChange={evt => {console.log(evt.target);this.props.updateForm({foreign_nationals: evt.target.value})}}
						onChange={value => {
							value == 'yes' ?
								this.props.updateForm({foreign_nationals: true})
								: this.props.updateForm({foreign_nationals: false})}}
						name="radio-button-group"
						defaultSelected="default-selected">
		        <RadioButton
							// onChange={evt => this.props.updateForm({foreign_nationals: evt.target.value})}
		          className="form-radio-button"
		          id="radio-1"
		          labelText="Yes"
		          value="yes"
		        />
		        <RadioButton
							// onChange={evt => this.props.updateForm({foreign_nationals: evt.target.value})}
		          className="form-selected-radio-button"
		          id="radio-2"
		          labelText="No"
		          value="no"
		        />
		      </RadioButtonGroup>
	      </div>
      </div>
    )
  }
}