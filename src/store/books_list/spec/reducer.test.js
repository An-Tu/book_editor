import reducer from '../reducer';
import * as actions from '../actions';
import { bookFields, authorFields } from '../constants';

const { title, authors, pages, publishingHouses, year, releaseDate, isbn, img } = bookFields;
const { name, lastname } = authorFields;

const state = [
  {
    [title]: 'Совершенный код',
    [authors]: [
      {
        [name]: 'Стив',
        [lastname]: 'Макконнелл',
      },
    ],
    [pages]: 896,
    [publishingHouses]: 'Русская редакция',
    [year]: 2017,
    [releaseDate]: '01.01.2017',
    [isbn]: '978-5-7502-0064-1',
    [img]: '',
  },
  {
    [title]: 'Алгоритмы. Построение и анализ',
    [authors]: [
      {
        [name]: 'Томас',
        [lastname]: 'Кормен',
      },
      {
        [name]: 'Чарльз',
        [lastname]: 'Лейзерсон',
      },
      {
        [name]: 'Рональд',
        [lastname]: 'Ривест',
      },
      {
        [name]: 'Клиффорд',
        [lastname]: 'Штайн ',
      },
    ],
    [pages]: 1328,
    [publishingHouses]: 'Диалектика',
    [year]: 2018,
    [releaseDate]: '01.01.2018',
    [isbn]: '978-5-907114-11-1',
    [img]: '',
  },
];

describe('books list reducer tests', () => {
  test('should add the book in the list', () => {
    const newBook = {
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
    const newState = reducer(state, actions.addBook(newBook));
    expect(newState).toEqual([newBook, ...state]);
  });

  test('should edit the book in the list', () => {
    const editableBook = state[1];
    const newBook = {
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
      [isbn]: '1000',
      [img]: '',
    };
    const newState = reducer(state, actions.editBook(editableBook, newBook));
    expect(newState).toEqual([state[0], newBook]);
  });

  test('should delete the book from the list', () => {
    const newState = reducer(state, actions.deleteBook(state[1]));
    expect(newState).toEqual([
      {
        [title]: 'Совершенный код',
        [authors]: [
          {
            [name]: 'Стив',
            [lastname]: 'Макконнелл',
          },
        ],
        [pages]: 896,
        [publishingHouses]: 'Русская редакция',
        [year]: 2017,
        [releaseDate]: '01.01.2017',
        [isbn]: '978-5-7502-0064-1',
        [img]: '',
      },
    ]);
  });
});
