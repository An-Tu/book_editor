import React from 'react';
import bemCl from 'bem-cl';
import { Link } from 'react-router-dom';
import './header.scss';

const b = bemCl('header');

const Header = () => (
  <div className={b()}>
    <h1 className={b('text')}>Book Editor</h1>
    <Link className={String(b('link'))} to="/form">
      Добавить книгу
    </Link>
  </div>
);

export default Header;
