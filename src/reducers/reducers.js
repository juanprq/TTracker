import { combineReducers } from 'redux';
import trackers from './trackers';
import tracker from './tracker';
import projects from './projects';

const ttApp = combineReducers({
  trackers,
  tracker,
  projects,
});

module.exports = ttApp;
