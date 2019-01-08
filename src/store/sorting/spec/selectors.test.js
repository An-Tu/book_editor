import { getSorting } from '../selectors';
import { stateKey } from '../constants';

const stateValue = {
  field: 'title',
  direction: 1,
};

const state = {
  [stateKey]: stateValue,
};

test('getSorting selector test', () => {
  const data = getSorting(state);
  expect(data).toEqual(stateValue);
});
