import { actionTypes } from './constants';

export const setField = field => ({
  type: actionTypes.SET_FIELD,
  field,
});

export const setDirection = direction => ({
  type: actionTypes.SET_DIRECTION,
  direction,
});
