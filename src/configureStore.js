const ttApp = require('./reducers/reducers');
const { createStore, applyMiddleware } = require('redux');
const promise = require('redux-promise');
const createLogger = require('redux-logger');

const configureStore = () =>
  createStore(
    ttApp,
    applyMiddleware(promise, createLogger())
  );

module.exports = configureStore;
