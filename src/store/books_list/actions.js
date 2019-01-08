import { actionTypes, bookFields } from './constants';

export const addBook = ({
  title,
  authors = [],
  pages,
  publishingHouses,
  year,
  releaseDate,
  isbn,
  img,
}) => ({
  type: actionTypes.ADD,
  book: {
    [bookFields.title]: title,
    [bookFields.authors]: authors,
    [bookFields.pages]: pages,
    [bookFields.publishingHouses]: publishingHouses,
    [bookFields.year]: year,
    [bookFields.releaseDate]: releaseDate,
    [bookFields.isbn]: isbn,
    [bookFields.img]: img,
  },
});

export const editBook = (
  book,
  { title, authors = [], pages, publishingHouses, year, releaseDate, isbn, img }
) => ({
  type: actionTypes.EDIT,
  book,
  newData: {
    [bookFields.title]: title,
    [bookFields.authors]: authors,
    [bookFields.pages]: pages,
    [bookFields.publishingHouses]: publishingHouses,
    [bookFields.year]: year,
    [bookFields.releaseDate]: releaseDate,
    [bookFields.isbn]: isbn,
    [bookFields.img]: img,
  },
});

export const deleteBook = book => ({
  type: actionTypes.DELETE,
  book,
});
