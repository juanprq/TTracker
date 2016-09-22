const React = require('react');

const MainContainer = (props) =>  {
  return (
    <div className="s12">
      {props.children}
    </div>
  )
};

module.exports = MainContainer;
