import React, { Component } from 'react';
import './Settings.css';
import Navbar from '../navbar/Navbar';

import {
  Button,
  Form,
  FormGroup,
  Checkbox,
  NumberInput,
  Toggle,
  FileUploader,
  RadioButton,
  RadioButtonGroup,
  Search,
  Select,
  SelectItem,
  TextInput,
  TextArea
} from 'carbon-components-react';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSection: 'Business Units'
    };
  }

  onSubmit() {
    console.log('clicked submit');
  }

  onChange() {
    console.log('radio changed');
  }

  render() {
    return(
      <div className="settings">

        <Navbar
          title={'Settings'}
          items={['Business Units', 'Personal Profile']}>
        </Navbar>

        <div className="settings-content">
          <h2 className="settings-content-title">{this.state.curSection}</h2>
          {/* Settings form here */}
          <Form className="form" onSubmit={this.onSubmit()}>
            <FormGroup className="form-group" legendText="BU Description">
              <Checkbox
                defaultChecked
                className="form-checkbox"
                id="checkbox-0"
                labelText="First"
              />
              <Checkbox className="some-class" labelText="Checkbox label" id="checkbox-1" />
              <Checkbox
                disabled
                className="form-checkbox"
                id="checkbox-2"
                labelText="Second"
              />
            </FormGroup>
            <NumberInput
              className="form-number-input"
              id="number-input-1"
              label="Employees in BU"
              min={0}
              max={1000000}
              value={50}
              step={100}
            />
            <FormGroup className="form-group" legendText="Select category">
              <RadioButtonGroup onChange={this.onChange()} name="radio-button-group" defaultSelected="default-selected">
                <RadioButton
                  className="form-radio-button"
                  id="radio-1"
                  labelText="Category 1"
                  value="standard"
                />
                <RadioButton
                  className="form-selected-radio-button"
                  id="radio-2"
                  labelText="Default Category"
                  value="default-selected"
                />
                <RadioButton
                  className="form-radio-button"
                  id="radio-3"
                  labelText="Category 3"
                  value="blue"
                />
              </RadioButtonGroup>
            </FormGroup>
            <Select className="form-select" id="select-1" defaultValue="placeholder-item">
              <SelectItem
                disabled
                hidden
                value="placeholder-item"
                text="Choose an option"
              />
              <SelectItem value="option-1" text="Option 1" />
              <SelectItem value="option-2" text="Option 2" />
              <SelectItem value="option-3" text="Option 3" />
            </Select>
            <TextInput
              className="form-text-input"
              id="hiring-manager"
              labelText="Receiving Hiring Manager"
              placeholder="Manager's Name"
            />
            <TextArea
              className="form-text-area"
              id="bu-description"
              labelText="Description"
              placeholder="BU Description"
            />
            <TextArea
              className="form-text-area"
              id="bu-description"
              labelText="Description"
              placeholder="BU Description"
            />
            <TextArea
              className="form-text-area"
              id="bu-description"
              labelText="Description"
              placeholder="BU Description"
            />
            <TextArea
              className="form-text-area"
              id="bu-description"
              labelText="Description"
              placeholder="BU Description"
            />
            <TextArea
              className="form-text-area"
              id="bu-description"
              labelText="Description"
              placeholder="BU Description"
            />
            <Button type="submit" className="form-submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

