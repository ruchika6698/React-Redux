import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Register from './Components/Register'
import Registeration from './Components/Registeration '


class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/registeration" component={Registeration} />

      </Router>
      </div>
    );
  }
}
export default App;
