import React from 'react';
import Tracker from './Tracker';
import AddLog from './AddLog';
import LogModal from './LogModal';

// este contenedor esta participando para ser extraido con connect
function TrackerContainer({ params }) {
  return (
    <div>
      <Tracker currentDate={params.date} />
      <AddLog />
      <LogModal />
    </div>
  );
}

TrackerContainer.propTypes = {
  params: React.PropTypes.object,
};

module.exports = TrackerContainer;
