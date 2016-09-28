const React = require('react');
const { IndexLink } = require('react-router');
const NavLink = require('./NavLink');

function MainMenu(props) {
  return (
    <div>
      <nav className="indigo" role="navigation">
        <div className="nav-wrapper container">
          <IndexLink id="logo-container" className="brand-logo" to="/">
            TTracker
          </IndexLink>
          <ul className="right hide-on-med-and-down">
            <NavLink to="/trackers">
              Trackers
            </NavLink>
            <NavLink to="/reports">
              Reportes
            </NavLink>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="s12">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MainMenu.propTypes = {
  children: React.PropTypes.object,
};

module.exports = MainMenu;
