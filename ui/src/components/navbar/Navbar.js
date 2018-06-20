import React, { Component } from 'react';
import './Navbar.css';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSelected: this.props.curSelected
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.curSelected !== nextProps.curSelected) {
      this.setState({ curSelected: nextProps.curSelected });
    }
  }

  selectItem(e, item) {
    e.preventDefault();
    this.setState({ curSelected: item });
    this.props.updateNavbar(item);
  }

  render() {
    return(
      <div className="navbar">
        <div className="navbar-title">Drafts</div>
        <ul className="navbar-ul">
          {this.props.items.map((item) => {
            return (
              <li
                className={"navbar-li " + (this.state.curSelected === item ? "selected" : "")}
                key={`navbar-${item}`}
                onClick={(e) => this.selectItem(e, item)}>
                {item}
              </li>
            )
          })}
        <li
        	className={"navbar-li " + (this.state.curSelected === 'New Draft' ? "selected" : "")}
        	key={`navbar-new`}
        	onClick={(e) => this.selectItem(e, 'New Draft')}>
        	{'New Draft'}
        </li>
        </ul>
      </div>
    )
  }
}
