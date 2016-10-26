import axios from 'axios';
import * as actions from '../../src/actions/projectsActions';
import * as types from '../../src/constants/actionTypes';

describe('actions', () => {
  const payload = 'test';
  beforeEach(() => {
    spyOn(axios, 'get').and.returnValue(payload);
  });

  it('should create an action to fetch with the correct type', () => {
    expect(actions.fetchProjects().type).toEqual(types.FETCH_PROJECTS);
  });

  it('should create an action to fetch with the correct payload', () => {
    expect(actions.fetchProjects().payload).toEqual(payload);
  });
});
