const React = require('react');
const TrackerItem = require('./TrackerItem');
const TrackerTitle = require('./TrackerTitle');
const DaySelector = require('./DaySelector');

function Tracker(props) {

  const currentDate = new Date();

  return (
    <div className="col m12">
      <div className="section">
        <TrackerTitle />
      </div>
      <div className="section">
        <DaySelector currentDate={currentDate} />
      </div>
      <div className="section">
        <div className="collection">
          {props.logs.map(log => <TrackerItem key={log.id} log={log} handleClick={props.handleItemClick} />)}
        </div>
      </div>
    </div>
  );
}

Tracker.propTypes = {
  logs: React.PropTypes.array,
  handleItemClick: React.PropTypes.func,
};

module.exports = Tracker;
