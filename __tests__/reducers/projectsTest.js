/* global describe it expect beforeEach */

import reducer from '../../src/reducers/projects';
import * as types from '../../src/constants/actionTypes';

describe('project reducer', () => {
  describe('default state', () => {
    it('should return default state', () => {
      expect(reducer(undefined, {})).toEqual([]);
    });
  });

  describe('fetch projects', () => {
    let state;
    beforeEach(() => { state = []; });

    it('return the fetched projects', () => {
      const projects = [
        { name: 'project 1' },
        { name: 'project 2' },
        { name: 'project 3' },
      ];
      const action = {
        type: types.FETCH_PROJECTS_FULFILLED,
        payload: { data: projects },
      };

      expect(reducer(state, action)).toEqual(projects);
    });
  });
});
