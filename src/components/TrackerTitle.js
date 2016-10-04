import React from 'react';

function TrackerItem({ text, description, currentDate }) {
  const textDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

  return (
    <div>
      <h2 className="header indigo-text darken-4-text">
        {text} - {textDate}
      </h2>
      <p>
        {description}
      </p>
    </div>
  );
}

TrackerItem.propTypes = {
  text: React.PropTypes.string,
  description: React.PropTypes.string,
  currentDate: React.PropTypes.object,
};

TrackerItem.defaultProps = {
  text: 'Tracker',
  description: 'Registra y realiza el seguimiento del tiempo que inviertes en tus proyectos.',
};

module.exports = TrackerItem;
