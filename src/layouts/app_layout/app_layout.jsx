import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';

const b = bemCl('app-layout');

const AppLayout = ({ header, main }) => (
  <div className={b()}>
    <header className={b('header')}>{header}</header>
    <main className={b('main')}>{main}</main>
  </div>
);

AppLayout.propTypes = {
  header: PropTypes.element.isRequired,
  main: PropTypes.element.isRequired,
};

export default AppLayout;
