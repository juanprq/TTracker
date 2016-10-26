import axios from 'axios';
import * as actions from '../../src/actions/trackersActions';
import * as types from '../../src/constants/actionTypes';

describe('actions', () => {
  const postResponse = { payload: 'this is a post!' };
  const putResponse = { payload: 'this is a put!' };
  const deleteResponse = { payload: 'this is a delete!' };
  const getResponse = { payload: 'this is a get!' };
  const tracker = { test: 'this is a test' };

  beforeEach(() => {
    spyOn(axios, 'post').and.returnValue(postResponse);
    spyOn(axios, 'put').and.returnValue(putResponse);
    spyOn(axios, 'delete').and.returnValue(deleteResponse);
    spyOn(axios, 'get').and.returnValue(getResponse);
  });

  it('should create a new tracker action', () => {
    expect(actions.newTracker()).toEqual({ type: types.NEW_TRACKER });
  });

  it('should create a set tracker action', () => {
    const action = {
      type: types.SET_TRACKER,
      payload: tracker,
    };
    expect(actions.setTracker(tracker)).toEqual(action);
  });

  it('should create an add tracker action with the correct type', () => {
    expect(actions.addTracker(tracker).type).toEqual(types.ADD_TRACKER);
  });

  it('should create an add tracker action with the correct payload', () => {
    expect(actions.addTracker(tracker).payload).toEqual(postResponse);
  });

  it('should create an update tracker action with the correct type', () => {
    expect(actions.updateTracker(tracker).type).toEqual(types.UPDATE_TRACKER);
  });

  it('should create an update tracker action with the correct payload', () => {
    expect(actions.updateTracker(tracker).payload).toEqual(putResponse);
  });

  it('should create a remove tracker action with the correct type', () => {
    expect(actions.removeTracker(1).type).toEqual(types.REMOVE_TRACKER);
  });

  it('should create a remove tracker action with the correct payload', () => {
    expect(actions.removeTracker(1).payload).toEqual(deleteResponse);
  });

  it('should create a fetch trackers action with the correct type', () => {
    expect(actions.fetchTrackers().type).toEqual(types.FETCH_TRACKERS);
  });

  it('should create a fetch trackers action with the correct payload', () => {
    expect(actions.fetchTrackers().payload).toEqual(getResponse);
  });
});
