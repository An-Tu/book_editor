import { actionTypes, fields, directions } from './constants';

const defaultState = {
  field: fields.title,
  direction: directions.desc,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_FIELD:
      return {
        ...state,
        field: action.field,
      };
    case actionTypes.SET_DIRECTION:
      return {
        ...state,
        direction: action.direction,
      };
    default:
      return state;
  }
};
