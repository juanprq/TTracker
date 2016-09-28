const React = require('react');
const ReactDOM = require('react-dom');
const MainContainer = require('./components/MainContainer');
const TrackerContainer = require('./components/TrackerContainer');
const Home = require('./components/Home');
const { Router, Route, hashHistory, IndexRoute } = require('react-router');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
  ), document.getElementById('root'));
