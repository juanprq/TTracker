import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Root from './components/Root';
import * as trackersActions from './actions/trackersActions';

const store = configureStore();

store.dispatch(trackersActions.fetchTracker());

ReactDOM.render((
  <Provider store={store}>
    <Root />
  </Provider>
  ), document.getElementById('root'));
