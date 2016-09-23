const React = require('react');
const Tracker = require('./Tracker');
const Loading = require('./Loading');
const AddLog = require('./AddLog');
const LogModal = require('./LogModal');
const getLogs = require('../services/time-logs');

const TrackerContainer = React.createClass({
  getInitialState() {
    return {
      log: {},
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

    this.setState({ log });
    $('#log-modal').openModal();
  },
  onAddLogClick(event) {
    event.preventDefault();
    // Esto se puede hacer de otra forma más react?
    this.setState({ log: {} });
    $('#log-modal').openModal();
  },
  onSaveLog(event) {
    event.preventDefault();
    console.log('Guardar log');
  },
  render() {
    if (this.state.isLoading === true) {
      return (
        <Loading />
      );
    }

    return (
      <div>
        <Tracker logs={this.state.logs} handleItemClick={this.onTrackerItemClick} />
        <AddLog handleClick={this.onAddLogClick} />
        <LogModal log={this.state.log} handleClick={this.onSaveLog} />
      </div>
    );
  },
});

module.exports = TrackerContainer;
