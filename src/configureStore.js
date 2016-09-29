import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import ttApp from './reducers/reducers';

const configureStore = () =>
  createStore(
    ttApp,
    applyMiddleware(promise, createLogger())
  );

module.exports = configureStore;
