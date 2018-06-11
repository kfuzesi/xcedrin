import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom';
import './App.css';

import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header"><h1>Xcedrin</h1></header>

          <div className="app-navbar">
            <ul className="navbar-route-list">
              <li className="navbar-route"><Link to="/dashboard">Dashboard</Link></li>
              <li className="navbar-route"><Link to="/dashboard">Demand</Link></li>
              <li className="navbar-route"><Link to="/dashboard">Settings</Link></li>
              <li className="navbar-route"><Link to="/dashboard">Support</Link></li>
            </ul>
          </div>

          <Switch>
            <Route path="/dashboard" exact={true} component={Dashboard} />
            {/* <Route path="/demand" exact={true} component={Demand} />
            <Route path="/settings" exact={true} component={Settings} />
            <Route path="/support" exact={true} component={Support} /> */}
            <Route path="/" exact={true} render={() => (<Redirect to="/dashboard"/>)} />
            <Route render={() => (<h1>404</h1>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
