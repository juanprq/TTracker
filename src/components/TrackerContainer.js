import React from 'react';
import Tracker from './Tracker';
import AddTracker from './AddTracker';
import TrackerModal from './TrackerModal';

// este contenedor esta participando para ser extraido con connect
function TrackerContainer({ params }) {
  return (
    <div>
      <Tracker currentDate={params.date} />
      <AddTracker />
      <TrackerModal />
    </div>
  );
}

TrackerContainer.propTypes = {
  params: React.PropTypes.object,
};

module.exports = TrackerContainer;
