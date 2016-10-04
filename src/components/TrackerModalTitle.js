import React from 'react';
import { connect } from 'react-redux';

function TrackerModalTitle({ isNew }) {
  if (isNew) {
    return (
      <div>
        <h4>Agregar tracker</h4>
        <p>Complete la siguiente información para agregar un tracker.</p>
      </div>
    );
  }

  return (
    <div>
      <h4>Actualizar tracker</h4>
      <p>Actualice la siguiente información del tracker.</p>
    </div>
  );
}

TrackerModalTitle.propTypes = {
  isNew: React.PropTypes.bool,
};

function mapStateToProps(state) {
  const isNew = state.tracker.id ? false : true;
  return { isNew };
}

module.exports = connect(mapStateToProps, null)(TrackerModalTitle);
