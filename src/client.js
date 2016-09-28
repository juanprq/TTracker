const React = require('react');
const ReactDOM = require('react-dom');
const MainMenu = require('./components/MainMenu');
const TrackerContainer = require('./components/TrackerContainer');
const Home = require('./components/Home');
const Reports = require('./components/Reports');
const { Router, Route, hashHistory, IndexRoute } = require('react-router');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MainMenu}>
      <IndexRoute component={Home} />
      <Route path="/trackers" component={TrackerContainer} />
      <Route path="/reports" component={Reports} />
    </Route>
  </Router>
  ), document.getElementById('root'));
