function projects(state = [], action) {
  switch (action.type) {
    case 'FETCH_PROJECTS_FULFILLED':
      return action.payload.data;
    default:
      return state;
  }
}

module.exports = projects;
