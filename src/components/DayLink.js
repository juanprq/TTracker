const React = require('react');
const { Link } = require('react-router');

function DayLink({ date, isActive }) {
  const textDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  const className = isActive ? 'waves-effect active indigo' : 'waves-effect';

  console.log(isActive);

  return (
    <li className={className}>
      <Link>{textDate}</Link>
    </li>
  );
}

DayLink.propTypes = {
  date: React.PropTypes.object,
  isActive: React.PropTypes.bool,
};

module.exports = DayLink;
