import getLogs from '../services/time-logs';

export function newTracker() {
  return {
    type: 'NEW_TRACKER',
  };
}

export function addTracker() {
  return {
    type: 'ADD_TRACKER',
    payload: {},
  };
}

export function updateTracker() {
  return {
    type: 'UPDATE_TRACKER',
    payload: {},
  };
}

export function removeTracker() {
  return {
    type: 'REMOVE_TRACKER',
    payload: {},
  };
}

export function fetchTrackers() {
  return {
    type: 'FETCH_TRACKERS',
    payload: getLogs(),
  };
}
