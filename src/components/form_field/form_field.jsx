import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import bemCl from 'bem-cl';
import './form_field.scss';

const b = bemCl('form-field');

export const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  validate: PropTypes.func,
  component: PropTypes.func,
};

const renderField = (name, validate, placeholder, type, Component) => (
  <Field name={name} validate={validate}>
    {({ input, meta }) => {
      const invalid = meta.error && meta.touched;
      return (
        <div>
          {Component != null ? (
            <Component
              {...input}
              id={name}
              className={String(b('field', { invalid }))}
              placeholder={placeholder}
            />
          ) : (
            <input
              {...input}
              id={name}
              className={b('field', { invalid })}
              type={type}
              placeholder={placeholder}
            />
          )}
          {invalid ? <div className={b('error').mix(b('field-error'))}>{meta.error}</div> : null}
        </div>
      );
    }}
  </Field>
);

/* eslint-disable jsx-a11y/label-has-for */
const FormField = ({ label, placeholder, name, type, validate, component: Component }) =>
  label == null ? (
    renderField(name, validate, placeholder, type, Component)
  ) : (
    <div className={b()}>
      <label className={b('label')} htmlFor={name}>{`${label}:`}</label>
      {renderField(name, validate, placeholder, type, Component)}
    </div>
  );
/* eslint-enable jsx-a11y/label-has-for */

FormField.propTypes = propTypes;
FormField.defaultProps = {
  label: null,
  placeholder: '',
  type: 'text',
  validate: () => {},
  component: null,
};

export default FormField;
