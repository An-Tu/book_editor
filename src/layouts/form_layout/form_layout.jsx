import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import './form_layout.scss';

const b = bemCl('form-layout');

const FormLayout = ({ content }) => <div className={b()}>{content}</div>;

FormLayout.propTypes = {
  content: PropTypes.element.isRequired,
};

export default FormLayout;
