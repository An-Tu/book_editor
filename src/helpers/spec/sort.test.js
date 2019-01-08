import { directions } from 'src/store/sorting/constants';
import { arraySort } from '../sort';

const data = [
  {
    numberField: 100,
    stringField: 'a',
  },
  {
    numberField: 5,
    stringField: 'b',
  },
  {
    numberField: 20,
    stringField: 'c',
  },
];

describe('arraySort test', () => {
  test('numberField derection desc', () => {
    const sortingArray = arraySort(data, 'numberField', directions.desc);
    expect(sortingArray).toEqual([data[0], data[2], data[1]]);
  });

  test('numberField derection asc', () => {
    const sortingArray = arraySort(data, 'numberField', directions.asc);
    expect(sortingArray).toEqual([data[1], data[2], data[0]]);
  });

  test('stringField derection desc', () => {
    const sortingArray = arraySort(data, 'stringField', directions.desc);
    expect(sortingArray).toEqual([data[2], data[1], data[0]]);
  });

  test('stringField derection asc', () => {
    const sortingArray = arraySort(data, 'stringField', directions.asc);
    expect(sortingArray).toEqual([data[0], data[1], data[2]]);
  });
});
