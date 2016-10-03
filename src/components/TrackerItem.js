import React from 'react';

function TrackerItem(props) {
  const colorClass = `material-icons circle ${props.tracker.color}`;
  const textColor = `${props.tracker.color}-text`;

  return (
    <a className="collection-item avatar" onClick={(event) => { props.handleClick(event, props.tracker); }}>
      {props.handleClick}
      <div className="row">
        <div className="col m11">
          <i className={colorClass}>av_timer</i>
          <span className="title indigo-text darken-4-text">{props.tracker.title}</span>
          <p>
            {props.tracker.description}
            {props.tracker.icon}
          </p>
        </div>
        <div className="col m1">
          <span className={textColor} style={{ fontSize: 30, position: 'relative', top: 21 }}>
            {props.tracker.time}
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

TrackerItem.defaultProps = {
  log: {
    title: 'Default title',
    color: 'teal',
    description: 'Empty description',
    time: '2:00',
  },
};

module.exports = TrackerItem;
