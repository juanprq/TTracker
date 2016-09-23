const React = require('react');

function TrackerItem(props) {
  const colorClass = `material-icons circle ${props.log.color}`;
  const textColor = `${props.log.color}-text`;

  return (
    <a href="" className="collection-item avatar" onClick={(event) => { props.handleClick(event, props.log); }} key={props.id}>
      {props.handleClick}
      <div className="row">
        <div className="col m11">
          <i className={colorClass}>av_timer</i>
          <span className="title indigo-text darken-4-text">{props.log.title}</span>
          <p>
            {props.log.description}
            {props.log.icon}
          </p>
        </div>
        <div className="col m1">
          <span className={textColor} style={{ fontSize: 30, position: 'relative', top: 21 }}>
            {props.log.time}
          </span>
        </div>
      </div>
    </a>
  );
}

TrackerItem.propTypes = {
  log: React.PropTypes.object,
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
