const React = require('react');

function AddLog(props) {
  return (
    <div className="fixed-action-btn" style={{ bottom: 45, right: 24 }}>
      <a className="btn-floating btn-large red" onClick={props.handleClick}>
        <i className="large material-icons">add</i>
      </a>
    </div>
  );
}

AddLog.PropTypes = {
  handleClick: React.PropTypes.func,
};

module.exports = AddLog;
