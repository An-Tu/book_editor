import reducer from '../reducer';
import * as actions from '../actions';
import { directions, fields } from '../constants';

const state = {
  field: fields.title,
  direction: directions.desc,
};

describe('sorting reducer tests', () => {
  test('should change field', () => {
    const field = fields.releaseDate;
    const newState = reducer(state, actions.setField(field));
    expect(newState).toEqual({
      ...state,
      field,
    });
  });

  test('should change direction', () => {
    const direction = directions.asc;
    const newState = reducer(state, actions.setDirection(direction));
    expect(newState).toEqual({
      ...state,
      direction,
    });
  });
});
