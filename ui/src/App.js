import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom';
import './App.css';

import Dashboard from './components/dashboard/Dashboard';
import Drafts from './components/drafts/Drafts';
import Demand from './components/demand/Demand';
import Settings from './components/settings/Settings';
import Support from './components/support/Support';
import Table from 'rc-table';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header"><h1><i className="fa fa-pills"></i>Xcedrin</h1></header>

          <div className="app-navbar">
            <ul className="navbar-route-list">
              <li className="navbar-route"><Link to="/dashboard">All Demand</Link></li>
              <li className="navbar-route"><Link to="/drafts">Drafts</Link></li>
              <li className="navbar-route"><Link to="/settings">Settings</Link></li>
              <li className="navbar-route"><Link to="/support">Support</Link></li>
            </ul>
          </div>

          <div className="app-content">
            <Switch>
              <Route path="/dashboard" exact={true} component={Dashboard} />
              <Route path="/drafts" exact={true} component={Drafts} />
              <Route path="/settings" exact={true} component={Settings} />
              <Route path="/support" exact={true} component={Support} />
              <Route path="/" exact={true} render={() => (<Redirect to="/dashboard"/>)} />
              <Route render={() => (<h1>404</h1>)} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
