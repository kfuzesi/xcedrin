import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <div className="navbar-title">Demand</div>
        <ul className="navbar-ul">
          {this.props.items.map((item) => {
            return (
              <li className="navbar-li" key={`navbar-${item}`}>{item}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
