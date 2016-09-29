const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const configureStore = require('./configureStore');
const Root = require('./components/Root');

const store = configureStore();
ReactDOM.render((
  <Provider store={store}>
    <Root />
  </Provider>
  ), document.getElementById('root'));
