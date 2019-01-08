import createActionTypes from '../createActionTypes';

const namespace = 'test';
const types = ['TYPE1', 'TYPE2', 'TYPE3'];

test('action types creator test', () => {
  const actionTypes = createActionTypes(namespace, types);
  expect(actionTypes).toEqual({
    [types[0]]: `${namespace}/${[types[0]]}`,
    [types[1]]: `${namespace}/${[types[1]]}`,
    [types[2]]: `${namespace}/${[types[2]]}`,
  });
});
