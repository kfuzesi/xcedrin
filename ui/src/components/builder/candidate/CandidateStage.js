import React, { Component } from 'react';
import './CandidateStage.css';

import { DropdownV2 } from 'carbon-components-react';

function itemToString(item) {
  return item.text;
}

const schools = [
  {
    id: 'option-1',
    text: 'Cornell'
  },
  {
    id: 'option-1',
    text: 'NYU'
  },
  {
    id: 'option-1',
    text: 'Columbia'
  },
];

const fields = [
  {
    title: 'School',
    label: 'Select a school',
    list: schools
  },
  {
    title: 'Other',
  },
];

export default class CandidateStage extends Component {
  render() {
    return(
      <div className="position-stage">
          {fields.map((field) => {
            if (field.title == 'Other') {
              return(
                <div className="position-section">
                  <div className="position-section-title">{field.title}</div>
                  <div>Input field</div>
                </div>
              )
            }
            else {
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
              )
            }
            })}
      </div>
    )
  }
}
