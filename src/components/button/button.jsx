import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import './button.scss';

const b = bemCl('button');

/* eslint-disable react/button-has-type */
const Button = ({ children, type, className, disabled, ...rest }) => (
  <button {...rest} className={b({ disabled }).mix(className)} type={type} disabled={disabled}>
    {children}
  </button>
);
/* eslint-enable react/button-has-type */

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  disabled: false,
};

export default Button;
