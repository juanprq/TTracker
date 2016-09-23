const React = require('react');
const Tracker = require('./Tracker');
const Loading = require('./Loading');
const getLogs = require('../services/time-logs');

const TrackerContainer = React.createClass({
  getInitialState() {
    return {
      logs: [],
      isLoading: true,
    };
  },
  componentDidMount() {
    getLogs().then((data) => {
      this.setState({ logs: data, isLoading: false });
    });
  },
  onTrackerItemClick(event, log) {
    event.preventDefault();
    // TODO: cargar modal con esto, como hago??
    console.log(event);
    console.log(log);
  },
  render() {
    if (this.state.isLoading === true) {
      return (
        <Loading />
      );
    }

    return (
      <Tracker logs={this.state.logs} handleItemClick={this.onTrackerItemClick} />
    );
  },
});

module.exports = TrackerContainer;
