const React = require('react');

function TrackerItem({ text, description }) {
  const date = new Date();
  const textDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

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
};

TrackerItem.defaultProps = {
  text: 'Tracker',
  description: 'Registra y realiza el seguimiento del tiempo que inviertes en tus proyectos.',
};

module.exports = TrackerItem;
