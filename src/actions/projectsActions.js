import axios from 'axios';

export function fetchProjects() {
  return {
    type: 'FETCH_PROJECTS',
    payload: axios.get('/api/v1/projects'),
  };
}
