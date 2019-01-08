import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import BookItem, { propTypes as bookItemPropTypes } from 'src/components/book_item';
import './books_list.scss';

const b = bemCl('books-list');

const { book: bookProp, ...otherProps } = bookItemPropTypes;

export const propTypes = {
  ...otherProps,
  books: PropTypes.arrayOf(bookProp).isRequired,
};

const BooksList = ({ books, onDelete, onEdit }) => (
  <ul className={b()}>
    {books.map((book, idx) => (
      <li key={`${idx}/${book.title}`} className={b('item')}>
        <BookItem book={book} onDelete={onDelete} onEdit={onEdit} />
      </li>
    ))}
  </ul>
);

BooksList.propTypes = propTypes;

export default BooksList;
