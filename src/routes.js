import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Landing from './Components/Landing';
import About from './Components/About';
import Forms from './Components/Forms';

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/about" component={About}/>
            <Route path="/forms" component={Forms}/>
        </Switch>
      </main>
    );
  }
}

export default Routes;
