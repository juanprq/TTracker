function trackers(state = [], action) {
  switch (action.type) {
    case 'ADD_TRACKER':
      return state;
    case 'UPDATE_TRACKER':
      return state;
    case 'REMOVE_TRACKER':
      return state;
    default:
      return state;
  }
}

module.exports = trackers;
