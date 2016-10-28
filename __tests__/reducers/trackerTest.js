/* global describe it expect beforeEach */

import reducer from '../../src/reducers/tracker';
import * as types from '../../src/constants/actionTypes';

describe('tracker reducer', () => {
  const defaultState = {
    projectId: '',
    description: '',
    time: '',
  };

  describe('default state', () => {
    it('should return default state', () => {
      expect(reducer(undefined, {})).toEqual(defaultState);
    });
  });

  describe('new tracker', () => {
    let state;
    beforeEach(() => { state = { name: 'some status' }; });

    it('return new tracker', () => {
      const action = {
        type: types.NEW_TRACKER,
      };

      const response = Object.assign({}, defaultState, { error: false });
      expect(reducer(state, action)).toEqual(response);
    });
  });

  describe('set tracker', () => {
    let state;
    beforeEach(() => { state = { name: 'some status' }; });

    it('return the setted tracker', () => {
      const tracker = {
        projectId: '2',
        description: 'test',
        time: '5',
      };

      const action = {
        type: types.SET_TRACKER,
        payload: tracker,
      };

      const response = Object.assign({}, tracker, { error: false });
      expect(reducer(state, action)).toEqual(response);
    });
  });
});
