import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import Button from 'src/components/button';
import {
  composeValidators,
  isRequired,
  maxLength,
  mustBeNumber,
  inRange,
  minValue,
  checkMinDate,
  checkISBN,
} from 'src/helpers/validators';
import { bookFields } from 'src/store/books_list/constants';
import FormField from 'src/components/form_field';
import AuthorsField from 'src/components/authors_field';
import ImageUploader from 'src/components/image_uploader';
import DateField from 'src/components/date_field';
import './book_form.scss';

export const b = bemCl('book-form');

const titleValidator = composeValidators(isRequired, maxLength(30));
const authorsValidator = composeValidators(isRequired, maxLength(20));
const pagesValidator = composeValidators(isRequired, mustBeNumber, inRange(0, 10000));
const publishingHousesValidator = maxLength(30);
const yearValidator = composeValidators(mustBeNumber, minValue(1800));
const releaseDateValidator = checkMinDate(new Date(1800, 0, 1));

const subscription = { submitting: true, pristine: true };

const BookForm = ({ onSubmit, onCancel, initData }) => (
  <Form
    subscription={subscription}
    initialValues={initData}
    mutators={{
      ...arrayMutators,
    }}
    onSubmit={onSubmit}
    render={({
      handleSubmit,
      form: {
        mutators: { push, pop },
      },
    }) => (
      <form className={b()} onSubmit={handleSubmit}>
        <FormField
          label="Заголовок"
          name={bookFields.title}
          placeholder="Заголовок книги"
          validate={titleValidator}
        />
        <AuthorsField
          push={push}
          pop={pop}
          initData={initData[bookFields.authors]}
          validate={authorsValidator}
          name={bookFields.authors}
          label="Авторы"
          namePlaceholder="Имя"
          lastnamePlaceholder="Фамилия"
        />
        <FormField
          label="Страниц"
          name={bookFields.pages}
          placeholder="Количество страниц"
          validate={pagesValidator}
        />
        <FormField
          label="Издательство"
          name={bookFields.publishingHouses}
          placeholder="Издательство"
          validate={publishingHousesValidator}
        />
        <FormField
          label="Публикация"
          name={bookFields.year}
          validate={yearValidator}
          placeholder="Год публикации"
        />
        <FormField
          label="Выход в тираж"
          name={bookFields.releaseDate}
          placeholder="Выход в тираж"
          validate={releaseDateValidator}
          component={DateField}
        />
        <FormField label="ISBN" name={bookFields.isbn} validate={checkISBN} placeholder="ISBN" />
        <FormField
          label="Изображение"
          name={bookFields.img}
          placeholder="Выберите изображение"
          component={ImageUploader}
        />
        <div className={b('btns-wrapper')}>
          <Button type="submit" className={b('button').mix(b('submit'))}>
            Применить
          </Button>
          <Button type="button" onClick={onCancel} className={b('button').mix(b('cancel'))}>
            Отмена
          </Button>
        </div>
      </form>
    )}
  />
);

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  initData: PropTypes.object.isRequired, // eslint-disable-line
};

export default BookForm;
