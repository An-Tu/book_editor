import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBooksList } from 'src/store/books_list/selectors';
import { deleteBook } from 'src/store/books_list/actions';
import { createId } from 'src/helpers/book_id';
import BooksList, { propTypes as bookListPropTypes } from 'src/components/books_list';

const { onEdit, ...otherProps } = bookListPropTypes;

@withRouter
@connect(
  state => ({
    books: getBooksList(state),
  }),
  {
    onDelete: deleteBook,
  }
)
class BooksListContainer extends React.PureComponent {
  static propTypes = {
    ...otherProps,
  };

  constructor(props) {
    super(props);

    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(book) {
    this.props.history.push(`/form?id=${createId(book)}`);
  }

  render() {
    return (
      <BooksList books={this.props.books} onDelete={this.props.onDelete} onEdit={this.onEdit} />
    );
  }
}

export default BooksListContainer;
