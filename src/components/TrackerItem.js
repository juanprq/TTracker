import React from 'react';

function TrackerItem({ tracker, handleClick }) {
  const colorClass = `material-icons circle ${tracker.project.color}`;
  const textColor = `${tracker.project.color}-text`;

  return (
    <a className="collection-item avatar" onClick={(event) => { handleClick(event, tracker); }}>
      <div className="row">
        <div className="col m11">
          <i className={colorClass}>av_timer</i>
          <span className="title indigo-text darken-4-text">{tracker.project.name}</span>
          <p>
            {tracker.description}
          </p>
        </div>
        <div className="col m1">
          <span className={textColor} style={{ fontSize: 30, position: 'relative', top: 21 }}>
            {tracker.time}
          </span>
        </div>
      </div>
    </a>
  );
}

TrackerItem.propTypes = {
  tracker: React.PropTypes.object,
  handleClick: React.PropTypes.func,
};

module.exports = TrackerItem;
