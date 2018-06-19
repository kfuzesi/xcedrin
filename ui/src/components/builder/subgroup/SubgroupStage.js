import React, { Component } from 'react';
import './SubgroupStage.css';

import {
	  Button,
	  Form,
	  FormGroup,
	  Checkbox,
	  DropdownV2,
	  NumberInput,
	  RadioButton,
	  RadioButtonGroup,
	  Select,
	  SelectItem,
	  TextInput,
	  TextArea
} from 'carbon-components-react';

import Draft from '../../draft/Draft';

function itemToString(item) {
  return item.name;
}

export default class SubgroupStage extends Component {
	
	onChange() {
	    console.log('radio changed');
	}
	
  render() {
    return(
      <div className="subgroup-stage">
		<div className="subgroup-stage-title">Subgroup</div>
      	<div className="subgroup-input">
      		<TextInput
      			className="form-text-input subgroup-text-input"
      			id="subgroup"
      			placeholder="Subgroup Name"
            />
      	</div>
      	<div className="subgroup-stage-title">Receiving VP</div>
      	<div className="subgroup-input">
      		<TextInput
  				className="form-text-input subgroup-text-input"
  				id="vp"
  				placeholder="VP's Name"
  			/>
      	</div>
      	<div className="subgroup-input">
      		<div className="subgroup-stage-title">Can this subgroup support foreign nationals?</div>
		      <RadioButtonGroup onChange={this.onChange()} name="radio-button-group" defaultSelected="default-selected">
		        <RadioButton
		          className="form-radio-button"
		          id="radio-1"
		          labelText="Yes"
		          value="standard"
		        />
		        <RadioButton
		          className="form-selected-radio-button"
		          id="radio-2"
		          labelText="No"
		          value="default-selected"
		        />
		      </RadioButtonGroup>
	      </div>
      </div>
    )
  }
}