import { combineReducers } from 'redux';
import trackers from './trackers';

const ttApp = combineReducers({
  trackers,
});

module.exports = ttApp;
