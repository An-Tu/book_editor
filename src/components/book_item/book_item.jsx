import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import imgHolder from 'src/helpers/imgHolder';
import './book_item.scss';

export const b = bemCl('book-item');

const ENTER_CODE = 13;

export const formattingDate = timestemp => {
  if (timestemp == null) {
    return undefined;
  }
  const date = new Date(timestemp);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

const imgErrorHandler = evt => {
  const e = evt;
  e.target.src = imgHolder;
};

const renderInfo = (field, value, className) =>
  value == null ? null : (
    <div className={b(className).mix(b('text-wrapper'))}>
      <span className={b('text', { theme: 'bold' })}>{`${field}:`}</span>
      <span className={b('text')}>{value}</span>
    </div>
  );

class BookItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditKeyDown = this.onEditKeyDown.bind(this);
    this.onDeleteKeyDown = this.onDeleteKeyDown.bind(this);
  }

  onDelete(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.props.onDelete(this.props.book);
  }

  onEdit(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.props.onEdit(this.props.book);
  }

  onEditKeyDown(evt) {
    if (evt.keyCode === ENTER_CODE) {
      this.onEdit(evt);
    }
  }

  onDeleteKeyDown(evt) {
    if (evt.keyCode === ENTER_CODE) {
      this.onDelete(evt);
    }
  }

  render() {
    return (
      <div
        className={b()}
        onClick={this.onEdit}
        onKeyDown={this.onEditKeyDown}
        tabIndex="0"
        role="button"
      >
        <img
          className={b('img')}
          src={this.props.book.img}
          alt="book cover"
          onError={imgErrorHandler}
        />
        <div className={b('wrapper')}>
          {renderInfo('Заголовок', this.props.book.title, 'title')}
          <div className={b('authors').mix(b('text-wrapper'))}>
            <div className={b('text', { theme: 'bold' })}>Список авторов:</div>
            <ul className={b('authors-list')}>
              {this.props.book.authors.map(({ name, lastname }) => (
                <li key={`${name}/${lastname}`} className={b('author')}>
                  <span className={b('text')}>{name}</span>
                  <span className={b('text').mix(b('lastname'))}>{lastname}</span>
                </li>
              ))}
            </ul>
          </div>
          {renderInfo('Страниц', this.props.book.pages, 'pages-number')}
          {renderInfo('Издательство', this.props.book.publishingHouses, 'publishing-houses')}
          {renderInfo('Публикация', this.props.book.year, 'year')}
          {renderInfo('Выход в тираж', formattingDate(this.props.book.releaseDate), 'release-date')}
          {renderInfo('ISBN', this.props.book.isbn, 'isbn')}
        </div>
        <button
          className={b('button')}
          type="button"
          onClick={this.onDelete}
          onKeyDown={this.onDeleteKeyDown}
        />
      </div>
    );
  }
}

export const propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        lastname: PropTypes.string,
      })
    ),
    pages: PropTypes.number,
    publishingHouses: PropTypes.string,
    year: PropTypes.number,
    releaseDate: PropTypes.number,
    isbn: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

BookItem.propTypes = propTypes;

export default BookItem;
