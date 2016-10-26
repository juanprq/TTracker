/* global describe it expect beforeEach */

import reducer from '../../src/reducers/trackers';
import * as types from '../../src/constants/actionTypes';

describe('trackers reducer', () => {
  const defaultState = {
    loading: false,
    data: [],
  };

  describe('default state', () => {
    it('should return default state', () => {
      expect(reducer(undefined, {})).toEqual(defaultState);
    });
  });

  describe('fetch actions', () => {
    let state;
    beforeEach(() => { state = defaultState; });

    it('should return state for fetch pending', () => {
      const action = { type: types.FETCH_TRACKERS_PENDING };
      const newState = { loading: true, data: state.data };
      expect(reducer(state, action)).toEqual(newState);
    });

    it('should return state for fetch fulfilled', () => {
      const trackers = [
        {
          name: 'test 1',
        },
        {
          name: 'test 2',
        },
      ];
      const action = {
        type: types.FETCH_TRACKERS_FULFILLED,
        payload: trackers,
      };
      const response = {
        data: action.payload.data,
        loading: false,
      };
      expect(reducer(state, action)).toEqual(response);
    });
  });

  describe('update tracker', () => {
    let state;
    beforeEach(() => {
      state = {
        loading: false,
        data: [
          {
            _id: 1,
            name: 'tracker 1',
          },
          {
            _id: 2,
            name: 'tracker 2',
          },
        ],
      };
    });

    it('should return update tracker pending state', () => {
      const action = { type: types.UPDATE_TRACKER_PENDING };
      const response = Object.assign({}, state, { loading: true });
      expect(reducer(state, action)).toEqual(response);
    });

    it('should return update tracker fulfilled state', () => {
      const payload = {
        data: {
          tracker: {
            _id: 1,
            name: 'changed!',
          },
        },
      };
      const action = {
        type: types.UPDATE_TRACKER_FULFILLED,
        payload,
      };
      const response = {
        loading: false,
        data: [
          {
            _id: 1,
            name: 'changed!',
          },
          {
            _id: 2,
            name: 'tracker 2',
          },
        ],
      };
      expect(reducer(state, action)).toEqual(response);
    });
  });

  describe('remove tracker', () => {
    let state;
    beforeEach(() => {
      state = {
        loading: false,
        data: [
          {
            _id: 1,
            name: 'tracker 1',
          },
          {
            _id: 2,
            name: 'tracker 2',
          },
        ],
      };
    });

    it('should return status for remove tracker pending', () => {
      const action = { type: types.REMOVE_TRACKER_PENDING };
      const response = { loading: true, data: state.data };
      expect(reducer(state, action)).toEqual(response);
    });

    it('should return status for remove tracker fulfilled', () => {
      const action = {
        type: types.REMOVE_TRACKER_FULFILLED,
        payload: {
          data: {
            tracker: {
              _id: 1,
            },
          },
        },
      };
      const response = {
        loading: false,
        data: [
          {
            _id: 2,
            name: 'tracker 2',
          },
        ],
      };
      expect(reducer(state, action)).toEqual(response);
    });
  });

  describe('add tracker', () => {
    let state;
    beforeEach(() => {
      state = {
        loading: false,
        data: [
          {
            _id: 1,
            name: 'tracker 1',
          },
          {
            _id: 2,
            name: 'tracker 2',
          },
        ],
      };
    });

    it('should return status for add tracker pending', () => {
      const action = { type: types.ADD_TRACKER_PENDING };
      const response = { loading: true, data: state.data };
      expect(reducer(state, action)).toEqual(response);
    });

    it('should return status for add tracker rejected', () => {
      const action = { type: types.ADD_TRACKER_REJECTED };
      const response = { loading: false, data: state.data };
      expect(reducer(state, action)).toEqual(response);
    });

    it('should return status for add tracker added', () => {
      const action = {
        type: types.ADD_TRACKER_FULFILLED,
        payload: {
          data: {
            _id: 3,
            name: 'new',
          },
        },
      };
      const response = {
        loading: false,
        data: [...state.data, action.payload.data],
      };
      expect(reducer(state, action)).toEqual(response);
    });
  });
});
