const defaultState = {
  loading: false,
  data: [],
};

function trackers(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_TRACKERS_PENDING':
      return Object.assign({}, state, { loading: true });
    case 'FETCH_TRACKERS_FULFILLED':
      return Object.assign({}, state, { data: action.payload.data, loading: false });
    case 'UPDATE_TRACKER_PENDING':
      return Object.assign({}, state, { loading: true });
    case 'UPDATE_TRACKER_FULFILLED':
      const updatedTracker = action.payload.data.tracker;
      return Object.assign(
        {},
        state,
        {
          loading: false,
          data: state.data.map((tracker) => {
            return tracker._id !== updatedTracker._id ? tracker : updatedTracker;
          }),
        });
    case 'REMOVE_TRACKER_PENDING':
      return Object.assign({}, state, { loading: true });
    case 'REMOVE_TRACKER_FULFILLED':
      const id = action.payload.data.tracker._id;
      return Object.assign(
        {},
        state,
        {
          loading: false,
          data: state.data.filter(tracker => tracker._id !== id),
        });
    case 'ADD_TRACKER_REJECTED':
      return Object.assign({}, state, { loading: false });
    case 'ADD_TRACKER_PENDING':
      return Object.assign({}, state, { loading: true });
    case 'ADD_TRACKER_FULFILLED':
      return Object.assign({}, state, { data: [...state.data, action.payload.data], loading: false });
    default:
      return state;
  }
}

module.exports = trackers;
