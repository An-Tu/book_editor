import { directions } from 'src/store/sorting/constants';

const compareFunction = (a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
};

export const arraySort = (array, field, direction) => {
  const compares = {
    [directions.desc]: (a, b) => compareFunction(a[field], b[field]),
    [directions.asc]: (a, b) => compareFunction(b[field], a[field]),
  };

  return array.slice().sort(compares[direction]);
};
