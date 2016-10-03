import { combineReducers } from 'redux';
import trackers from './trackers';
import tracker from './tracker';

const ttApp = combineReducers({
  trackers,
  tracker,
});

module.exports = ttApp;
