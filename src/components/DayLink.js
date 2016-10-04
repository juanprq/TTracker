import React from 'react';
import { Link } from 'react-router';

function DayLink({ date, isActive }) {
  const className = isActive ? 'waves-effect active indigo' : 'waves-effect';
  const path = `/trackers/${date}`;

  return (
    <li className={className}>
      <Link to={path}>{date}</Link>
    </li>
  );
}

DayLink.propTypes = {
  date: React.PropTypes.string,
  isActive: React.PropTypes.bool,
};

module.exports = DayLink;
