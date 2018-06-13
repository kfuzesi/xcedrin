import React, { Component } from 'react';
import './OptionsList.css';

export default class OptionsList extends Component {
  constructor(props) {
    super(props);
  }

  saveAndContinue(e, data) {
    e.preventDefault(); 

    let res = {};
    res[this.props.field] = data;

    this.props.updateForm(res);
    this.props.incrementStep();
  }

  render() {
    return(
      <div className="options-list">
        {this.props.options.map(option => {
          return(
            <div
              key={option}
              className="option"
              onClick={(e) => this.saveAndContinue(e, option)}>
              {option}
            </div>
          )
        })}
      </div>
    )
  }
}
