import React from 'react';
import { connect } from 'react-redux';
import * as trackersActions from '../actions/trackersActions';
import * as modal from '../lib/trackerModal';

function AddTracker({ handleClick }) {
  return (
    <div className="fixed-action-btn" style={{ bottom: 45, right: 24 }}>
      <a className="btn-floating btn-large red" onClick={handleClick}>
        <i className="large material-icons">add</i>
      </a>
    </div>
  );
}

AddTracker.propTypes = {
  handleClick: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    handleClick() {
      modal.open();
      dispatch(trackersActions.newTracker());
    },
  };
}

module.exports = connect(null, mapDispatchToProps)(AddTracker);
