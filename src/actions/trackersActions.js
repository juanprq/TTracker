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
    payload: axios.post('/api/v1/trackers', tracker),
  };
}

export function updateTracker(tracker) {
  return {
    type: 'UPDATE_TRACKER',
    payload: tracker,
  };
}

export function removeTracker(trackerId) {
  return {
    type: 'REMOVE_TRACKER',
    payload: axios.delete(`/api/v1/trackers/${trackerId}`),
  };
}

export function fetchTrackers() {
  return {
    type: 'FETCH_TRACKERS',
    payload: axios.get('/api/v1/trackers'),
  };
}
