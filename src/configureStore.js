import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import ttApp from './reducers/reducers';

const configureStore = () =>
  createStore(
    ttApp,
    applyMiddleware(promiseMiddleware(), thunk, createLogger())
  );

module.exports = configureStore;
