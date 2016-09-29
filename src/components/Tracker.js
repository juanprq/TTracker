import React from 'react';
import TrackerItem from './TrackerItem';
import TrackerTitle from './TrackerTitle';
import DaySelector from './DaySelector';

function Tracker({ logs, currentDate, handleItemClick }) {
  let dateObject;

  if (!currentDate) {
    dateObject = new Date();
  } else {
    const parts = currentDate.split('-');
    dateObject = new Date(parts[1] - 1, parts[0], parts[2]);
  }

  return (
    <div className="col m12">
      <div className="section">
        <TrackerTitle />
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
