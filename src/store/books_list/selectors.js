import { createSelector } from 'reselect';
import { getSorting } from 'src/store/sorting/selectors';
import { createId } from 'src/helpers/book_id';
import { arraySort } from 'src/helpers/sort';
import { stateKey, bookFields } from './constants';

const getBooks = state => state[stateKey];

export const getBooksList = createSelector(
  getBooks,
  getSorting,
  (books, sorting) => arraySort(books, sorting.field, sorting.direction)
);

export const getBook = createSelector(
  getBooks,
  (state, bookId) => bookId,
  (books, bookId) =>
    bookId == null
      ? {
          [bookFields.authors]: [{}],
        }
      : books.find(book => createId(book) === bookId)
);
