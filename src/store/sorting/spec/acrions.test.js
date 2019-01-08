import * as actions from '../actions';
import { actionTypes } from '../constants';

describe('sorting actions tests', () => {
  test('create setField action', () => {
    const field = 'tmp';
    const action = actions.setField(field);
    expect(action).toEqual({
      type: actionTypes.SET_FIELD,
      field,
    });
  });

  test('create setDirection action', () => {
    const direction = 1;
    const action = actions.setDirection(direction);
    expect(action).toEqual({
      type: actionTypes.SET_DIRECTION,
      direction,
    });
  });
});
