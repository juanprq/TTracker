const defaultState = {
  projectId: '',
  description: '',
  time: '',
};

function tracker(state = defaultState, action) {
  switch (action.type) {
    case 'SET_TRACKER':
      return Object.assign({}, action.payload, { error: false });
    case 'NEW_TRACKER':
      return Object.assign({}, defaultState, { error: false });
    case 'DISPLAY_ERROR_TRACKER':
      return Object.assign({}, state, { error: true });
    default:
      return state;
  }
}

module.exports = tracker;
