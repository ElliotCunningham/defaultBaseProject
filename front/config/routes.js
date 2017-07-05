import React from 'react';
import Main from '../app/components/Main';
import Home from '../app/components/Home';

import { IndexRoute, Router, Route, browserHistory } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route name="app" path="/home" component={Main}>
    	<IndexRoute name="home" component={Home}/>
    </Route>
  </Router>
);