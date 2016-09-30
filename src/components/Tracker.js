import React from 'react';
import TrackerItem from './TrackerItem';
import TrackerTitle from './TrackerTitle';
import DaySelector from './DaySelector';

function Tracker({ logs, currentDate, handleItemClick }) {
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
          {logs.map(log => <TrackerItem key={log.id} log={log} handleClick={handleItemClick} />)}
        </div>
      </div>
    </div>
  );
}

Tracker.propTypes = {
  logs: React.PropTypes.array,
  currentDate: React.PropTypes.string,
  handleItemClick: React.PropTypes.func,
};

module.exports = Tracker;
