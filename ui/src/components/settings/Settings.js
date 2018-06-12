import React, { Component } from 'react';
import './Settings.css';

import { Button } from 'carbon-components-react';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div className="settings">
        Settings
        <Button type="submit" className="submit-button">Submit</Button>
      </div>
    );
  }
}

