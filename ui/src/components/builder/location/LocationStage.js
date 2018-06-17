import React, { Component } from 'react';
import './LocationStage.css';

import { DropdownV2, NumberInput } from 'carbon-components-react';
import Draft from '../../draft/Draft';

function itemToString(item) {
  return item.name;
}

const locations = [
  {
    name: 'Yorktown'
  },
  {
    name: 'Armonk'
  },
  {
    name: 'NYC'
  },
  {
    name: 'Almaden'
  },
]

const min = 1;
const max = 100;

export default class LocationStage extends Component {
  render() {
    return(
      <div className="location-stage">
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
    )
  }
}
