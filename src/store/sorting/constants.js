import createActionTypes from 'src/helpers/createActionTypes';

export const stateKey = 'sorting';

export const actionTypes = createActionTypes(stateKey, ['SET_FIELD', 'SET_DIRECTION']);

export const directions = {
  asc: 0,
  desc: 1,
};

export const fields = {
  title: 'title',
  releaseDate: 'releaseDate',
};
