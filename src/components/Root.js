import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainMenu from './MainMenu';
import TrackerContainer from './TrackerContainer';
import Home from './Home';
import Reports from './Reports';

function Root() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={MainMenu}>
        <IndexRoute component={Home} />
        <Route path="/trackers(/:date)" component={TrackerContainer} />
        <Route path="/reports" component={Reports} />
      </Route>
    </Router>
  );
}

module.exports = Root;
