const defaultState = {
  loading: false,
  data: [],
};

function trackers(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_TRACKERS_REJECTED':
      return Object.assign({}, state, { loading: false });
    case 'FETCH_TRACKERS_PENDING':
      return Object.assign({}, state, { loading: true });
    case 'FETCH_TRACKERS_FULFILLED':
      return Object.assign({}, state, { data: action.payload.data, loading: false });
    case 'UPDATE_TRACKER_REJECTED':
      return state;
    case 'UPDATE_TRACKER_PENDING':
      return state;
    case 'UPDATE_TRACKER_FULFILLED':
      return state;
    case 'REMOVE_TRACKER_REJECTED':
      return state;
    case 'REMOVE_TRACKER_PENDING':
      return state;
    case 'REMOVE_TRACKER_FULFILLED':
      return state;
    case 'ADD_TRACKER_REJECTED':
      return Object.assign({}, state, { loading: false });
    case 'ADD_TRACKER_PENDING':
      return Object.assign({}, state, { loading: true });
    case 'ADD_TRACKER_FULFILLED':
      return Object.assign({}, state, { data: [...state.data, action.payload], loading: false });
    default:
      return state;
  }
}

module.exports = trackers;
