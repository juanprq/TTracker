const React = require('react');
const TrackerItem = require('./TrackerItem');
const TrackerTitle = require('./TrackerTitle');

function Tracker(props) {
  return (
    <div className="col m12">
      <div className="section">
        <TrackerTitle />
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
