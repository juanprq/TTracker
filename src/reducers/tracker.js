const defaultState = {
  projectId: '',
  description: '',
  time: '',
};

function tracker(state = defaultState, action) {
  switch (action.type) {
    case 'SET_TRACKER':
      return action.payload;
    case 'NEW_TRACKER':
      return defaultState;
    default:
      return state;
  }
}

module.exports = tracker;
