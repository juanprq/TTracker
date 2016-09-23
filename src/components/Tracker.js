const React = require('react');
const TrackerItem = require('./TrackerItem');

function Tracker(props) {
  return (
    <div className="col m12">
      <div className="section">
        <h2 className="header indigo-text darken-4-text">
          Tracker - fecha de hoy
        </h2>
        <p>
          Registra y realiza el seguimiento del tiempo que inviertes en tus proyectos.
        </p>
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
