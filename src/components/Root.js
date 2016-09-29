const React = require('react');
const MainMenu = require('./MainMenu');
const TrackerContainer = require('./TrackerContainer');
const Home = require('./Home');
const Reports = require('./Reports');
const { Router, Route, browserHistory, IndexRoute } = require('react-router');

function Root() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={MainMenu}>
        <IndexRoute component={Home} />
        <Route path="/trackers" component={TrackerContainer}>
          <Route path="/trackers/:date" component={TrackerContainer} />
        </Route>
        <Route path="/reports" component={Reports} />
      </Route>
    </Router>
  );
}

module.exports = Root;
