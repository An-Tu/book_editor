import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookForm from 'src/components/book_form';
import { addBook, editBook } from 'src/store/books_list/actions';
import { getBook } from 'src/store/books_list/selectors';

@withRouter
@connect(
  (state, ownProps) => {
    const params = new URLSearchParams(ownProps.location.search);
    const id = params.get('id');
    return {
      book: getBook(state, id),
      id,
    };
  },
  {
    addBook,
    editBook,
  }
)
class BookFormContainer extends React.PureComponent {
  static propTypes = {
    addBook: PropTypes.func.isRequired,
    editBook: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    id: PropTypes.string,
  };

  static defaultProps = {
    id: null,
  };

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.goToList = this.goToList.bind(this);
  }

  onSubmit(formData) {
    const newData = {
      ...formData,
      pages: formData.pages ? parseInt(formData.pages, 10) : null,
      publishingHouses: formData.publishingHouses ? formData.publishingHouses : null,
      year: formData.year ? parseInt(formData.year, 10) : null,
      releaseDate: formData.releaseDate ? formData.releaseDate : null,
      isbn: formData.isbn ? formData.isbn : null,
      img: formData.img ? formData.img : '',
    };

    if (this.props.id == null) {
      this.props.addBook(newData);
    } else {
      this.props.editBook(this.props.book, newData);
    }

    this.goToList();
  }

  goToList() {
    this.props.history.push('/');
  }

  render() {
    return (
      <BookForm onSubmit={this.onSubmit} onCancel={this.goToList} initData={this.props.book} />
    );
  }
}

export default BookFormContainer;
