import { stateKey as sortingStateKey, fields, directions } from 'src/store/sorting/constants';
import { arraySort } from 'src/helpers/sort';
import { createId } from 'src/helpers/book_id';
import { stateKey, bookFields, authorFields } from '../constants';
import * as selectors from '../selectors';

const stateValue = [
  {
    [bookFields.title]: 'book 1',
    [bookFields.authors]: [
      {
        [authorFields.name]: 'name1',
        [authorFields.lastname]: 'lastname1',
      },
    ],
    [bookFields.pages]: 100,
  },
  {
    [bookFields.title]: 'book 2',
    [bookFields.authors]: [
      {
        [authorFields.name]: 'name2',
        [authorFields.lastname]: 'lastname2',
      },
    ],
    [bookFields.pages]: 200,
  },
];
const state = {
  [stateKey]: stateValue,
  [sortingStateKey]: {
    field: fields.title,
    direction: directions.desc,
  },
};

describe('books list selectors tests', () => {
  test('getBookList test', () => {
    const booksList = selectors.getBooksList(state);
    expect(booksList).toEqual(
      arraySort(stateValue, state[sortingStateKey].field, state[sortingStateKey].direction)
    );
  });

  test('getBook test', () => {
    const bookId = createId(stateValue[1]);
    const book = selectors.getBook(state, bookId);
    expect(book).toEqual(stateValue[1]);
  });
});
