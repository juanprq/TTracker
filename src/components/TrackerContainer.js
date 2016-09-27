const React = require('react');
const Tracker = require('./Tracker');
const Loading = require('./Loading');
const AddLog = require('./AddLog');
const LogModal = require('./LogModal');
const getLogs = require('../services/time-logs');

class TrackerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onTrackerItemClick = this.onTrackerItemClick.bind(this);
    this.onAddLogClick = this.onAddLogClick.bind(this);
    this.onSaveLog = this.onSaveLog.bind(this);
    this.state = {
      log: {},
      logs: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    getLogs().then((data) => {
      this.setState({ logs: data, isLoading: false });
    });
  }
  onTrackerItemClick(event, log) {
    event.preventDefault();

    this.setState({ log });
    $('#log-modal').openModal();
  }
  onAddLogClick(event) {
    event.preventDefault();
    // Esto se puede hacer de otra forma más react?
    this.setState({
      log: {
        projectId: '',
        description: '',
        time: '',
      },
    });
    $('#log-modal').openModal();
  }
  onSaveLog(event) {
    event.preventDefault();
    console.log('Guardar log');
  }
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
        <LogModal {...this.state.log} handleClick={this.onSaveLog} />
      </div>
    );
  }
}

module.exports = TrackerContainer;
