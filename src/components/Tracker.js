import React from 'react';
import { connect } from 'react-redux';
import TrackerItem from './TrackerItem';
import TrackerTitle from './TrackerTitle';
import DaySelector from './DaySelector';
import * as trackersActions from '../actions/trackersActions';

class Tracker extends React.Component {
  componentDidMount() {
    this.props.handleMount();
  }
  render() {
    let dateObject;

    if (!this.props.currentDate) {
      dateObject = new Date();
    } else {
      dateObject = new Date(this.props.currentDate);
    }

    return (
      <div className="col m12">
        <div className="section">
          <TrackerTitle currentDate={dateObject} />
        </div>
        <div className="section">
          <DaySelector currentDate={dateObject} />
        </div>
        <div className="section">
          <div className="collection">
            {(() => {
              if (this.props.isLoading) {
                return (<h2>Loading...</h2>);
              } else {
                return this.props.trackers.map(tracker => <TrackerItem key={tracker._id} tracker={tracker} handleClick={this.props.handleClick} />);
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}

Tracker.propTypes = {
  trackers: React.PropTypes.array,
  currentDate: React.PropTypes.string,
  handleClick: React.PropTypes.func,
  handleMpunt: React.PropTypes.func,
  isLoading: React.PropTypes.bool,
};

function mapStateToProps(state, ownProps) {
  return {
    trackers: state.trackers.data,
    isLoading: state.trackers.loading,
    currentDate: ownProps.currentDate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleMount: () => dispatch(trackersActions.fetchTrackers()),
    handleClick: (event, tracker) => {
      event.preventDefault();
      $('#tracker-modal').openModal();
      dispatch(trackersActions.setTracker(tracker));
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Tracker);
