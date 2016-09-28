const React = require('react');

function MainContainer(props) {
  return (
    <div className="s12">
      {props.children}
    </div>
  );
}

MainContainer.propTypes = {
  children: React.PropTypes.object,
};

module.exports = MainContainer;
