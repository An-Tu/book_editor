import * as actions from '../actions';
import { actionTypes, bookFields, authorFields } from '../constants';

const { title, authors, pages, publishingHouses, year, releaseDate, isbn, img } = bookFields;
const { name, lastname } = authorFields;

const book = {
  [title]: 'Book',
  [authors]: [
    {
      [name]: 'Name',
      [lastname]: 'Lastname',
    },
  ],
  [pages]: 100,
  [publishingHouses]: 'publishingHouses',
  [year]: 2000,
  [releaseDate]: '01.01.2000',
  [isbn]: '978-5-7502-0064-1',
  [img]: '',
};

describe('books list actions tests', () => {
  test('create addBook action', () => {
    const addBookAction = actions.addBook(book);
    expect(addBookAction).toEqual({
      type: actionTypes.ADD,
      book,
    });
  });

  test('create editBook action', () => {
    const newBook = {
      [title]: 'newBook',
      [authors]: [
        {
          [name]: 'newName',
          [lastname]: 'newLastname',
        },
      ],
      [pages]: 200,
      [publishingHouses]: 'newPublishingHouses',
      [year]: 4000,
      [releaseDate]: '01.01.2010',
      [isbn]: '978-5-7502-0064-2',
      [img]: '',
    };

    const addBookAction = actions.editBook(book, newBook);
    expect(addBookAction).toEqual({
      type: actionTypes.EDIT,
      book,
      newData: newBook,
    });
  });

  test('create deleteBook action', () => {
    const deleteBookAction = actions.deleteBook(book);
    expect(deleteBookAction).toEqual({
      type: actionTypes.DELETE,
      book,
    });
  });
});
