import React, { Component } from 'react';
import './Demand.css';

import { Button } from 'carbon-components-react';

export default class Demand extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div className="demand">
        Demand
        <Button type="submit" className="submit-button">Submit</Button>
      </div>
    );
  }
}

