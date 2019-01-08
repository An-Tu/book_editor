import createActionTypes from 'src/helpers/createActionTypes';

export const stateKey = 'booksList';

export const bookFields = {
  title: 'title',
  authors: 'authors',
  pages: 'pages',
  publishingHouses: 'publishingHouses',
  year: 'year',
  releaseDate: 'releaseDate',
  isbn: 'isbn',
  img: 'img',
};

export const authorFields = {
  name: 'name',
  lastname: 'lastname',
};

export const actionTypes = createActionTypes(stateKey, ['ADD', 'EDIT', 'DELETE']);
