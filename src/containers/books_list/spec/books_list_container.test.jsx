import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { stateKey, bookFields, authorFields } from 'src/store/books_list/constants';
import { stateKey as sortingStateKey, fields, directions } from 'src/store/sorting/constants';
import BooksListContainer from '../books_list';

const { title, authors, pages, publishingHouses, year, releaseDate, isbn, img } = bookFields;
const { name, lastname } = authorFields;

const initialState = {
  [stateKey]: [
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
      [releaseDate]: 1483218000000,
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
      [releaseDate]: 1514754000000,
      [isbn]: '978-5-907114-11-1',
      [img]: '',
    },
  ],
  [sortingStateKey]: {
    field: fields.title,
    direction: directions.desc,
  },
};
const mockStore = configureStore();

test('should connet from store', () => {
  const store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <BooksListContainer />
      </MemoryRouter>
    </Provider>
  );
  const component = wrapper.find('BooksListContainer');
  expect(component.prop('books')).toEqual(initialState[stateKey]);
  expect(component.prop('onDelete')).toBeInstanceOf(Function);
});
