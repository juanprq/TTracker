import React from 'react';
import { connect } from 'react-redux';
import TrackerItem from './TrackerItem';
import TrackerTitle from './TrackerTitle';
import DaySelector from './DaySelector';

function Tracker({ isLoading, trackers, currentDate, handleClick }) {
  let dateObject;

  if (!currentDate) {
    dateObject = new Date();
  } else {
    dateObject = new Date(currentDate);
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
            if (isLoading) {
              return (<h2>Loading...</h2>);
            } else {
              return trackers.map(tracker => <TrackerItem key={tracker.id} tracker={tracker} handleClick={handleClick} />);
            }
          })()}
        </div>
      </div>
    </div>
  );
}

Tracker.propTypes = {
  trackers: React.PropTypes.array,
  currentDate: React.PropTypes.string,
  handleClick: React.PropTypes.func,
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
    handleClick: (event, tracker) => {
      event.preventDefault();
      console.log(tracker);
    },
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Tracker);
