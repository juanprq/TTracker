import axios from 'axios';

export function newTracker() {
  return {
    type: 'NEW_TRACKER',
  };
}

export function setTracker(tracker) {
  return {
    type: 'SET_TRACKER',
    payload: tracker,
  };
}

export function addTracker(tracker) {
  return {
    type: 'ADD_TRACKER',
    payload: new Promise(resolve => resolve(tracker)),
  };
}

export function updateTracker(tracker) {
  return {
    type: 'UPDATE_TRACKER',
    payload: tracker,
  };
}

export function removeTracker(tracker) {
  return {
    type: 'REMOVE_TRACKER',
    payload: tracker,
  };
}

export function fetchTrackers() {
  return {
    type: 'FETCH_TRACKERS',
    payload: axios.get('/api/v1/trackers'),
  };
}
