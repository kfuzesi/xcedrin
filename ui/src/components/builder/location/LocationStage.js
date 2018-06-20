import React, { Component } from 'react';
import './LocationStage.css';

import { DropdownV2, NumberInput } from 'carbon-components-react';

function itemToString(item) {
  return item === null ? null : item.text;
}

const locations = [
  {
	  text: 'Yorktown'
  },
  {
	  text: 'Armonk'
  },
  {
	  text: 'NYC'
  },
  {
	  text: 'Almaden'
  },
]

const months = [
  {
    id: 'option-1',
    text: 'June, July, Aug'
  },
  {
    id: 'option-2',
    text: 'Sept, Oct, Nov'
  },
  {
    id: 'option-2',
    text: 'Dec, Jan, Feb'
  },
  {
    id: 'option-2',
    text: 'Mar, Apr, May'
  },
];

const min = 1;
const max = 100;

export default class LocationStage extends Component {
  render() {
    return(
      <div className="location-stage">
  		<div className="location-stage-title">Onboarding Month</div>
  		<div className="location-section">
  			<DropdownV2
  				key={'Onboarding Month'}
  				label={'Select desired onboarding month'}
  				items={months}
  				itemToString={itemToString}
  				className="position-dropdown"
  			/>
  		</div>
  		<div className="location-section">
        <div className="location-name-input">
  	    <div className="location-stage-title">Location</div>
          <DropdownV2
            label="Select a location for the position"
            items={locations}
            itemToString={itemToString}
            className="location-dropdown"
          />
        </div>
        <div className="location-num-input">
          <NumberInput
            id={`num-openings`}
            className="location-num-openings"
            label="# Openings"
            // onChange={onChange()}
            // onClick={onClick()}
            min={min}
            max={max}
            value={1}
            step={1}
            invalidText={`Number is not valid, must be between ${min} and ${max}`}
          />
        </div>
      </div>
      </div>
    )
  }
}
