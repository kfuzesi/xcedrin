import React, { Component } from 'react';
import './PositionStage.css';

import { DropdownV2 } from 'carbon-components-react';

function itemToString(item) {
  return item.text;
}

const bands = [
  {
    id: 'option-1',
    text: '06 - 07'
  },
  {
    id: 'option-1',
    text: '08 - 09'
  },
  {
    id: 'option-1',
    text: '10'
  },
  {
    id: 'option-1',
    text: 'Distinguished Engineer'
  },
  {
    id: 'option-1',
    text: 'Master Inventor'
  },
];

const degrees = [
  {
    id: 'option-1',
    text: 'BA'
  },
  {
    id: 'option-1',
    text: 'BS'
  },
  {
    id: 'option-1',
    text: 'MS'
  },
  {
    id: 'option-1',
    text: 'MBA'
  },
  {
    id: 'option-1',
    text: 'PhD'
  },
];

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

const fields = [
  {
    title: 'Bands',
    label: 'Select band level',
    list: bands
  },
  {
    title: 'Required Degree',
    label: 'Select required degree level',
    list: degrees
  },
  {
    title: 'Onboarding Month',
    label: 'Select desired onboarding month',
    list: months
  },
];

export default class PositionStage extends Component {
  render() {
    return(
      <div className="position-stage">
          {fields.map((field) => {
            return(
              <div className="position-section">
                <div className="position-section-title">{field.title}</div>
                <DropdownV2
                  key={field.title}
                  label={field.label}
                  items={field.list}
                  itemToString={itemToString}
                  // onChange={onChange()}
                  className="position-dropdown"
                />
              </div>
            )})}
      </div>
    )
  }
}
