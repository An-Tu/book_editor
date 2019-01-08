import React from 'react';
import FormLayout from 'src/layouts/form_layout';
import BookFormContainer from 'src/containers/book_form';

const FormPage = () => <FormLayout content={<BookFormContainer />} />;

export default FormPage;
