const trackers = require('./trackers');
const { combineReducers } = require('redux');

const ttApp = combineReducers({
  trackers,
});

module.exports = ttApp;
