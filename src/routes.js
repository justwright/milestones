import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Landing from './Components/Landing';
import About from './Components/About';
import Forms from './Components/Forms';

const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/about" component={About}/>
            <Route path="/forms" component={Forms}/>
        </Switch>
    </Router>
);

export default Routes;
