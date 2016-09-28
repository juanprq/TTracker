const React = require('react');
const { Link } = require('react-router');

function NavLink(props, context) {
  const isActive = context.router.isActive(props.to, true);
  const className = isActive ? 'active' : '';

  return (
    <li className={className}>
      <Link {...props} />
    </li>
  );
}

NavLink.contextTypes = {
  router: React.PropTypes.object,
};

NavLink.propTypes = {
  to: React.PropTypes.string,
};

module.exports = NavLink;
