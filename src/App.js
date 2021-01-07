import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login'
import Register from './Components/Register'
import Context from './Components/Context'


class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Context} />
        <Route path="/register" component={Register} />

      </Router>
      </div>
    );
  }
}
export default App;
