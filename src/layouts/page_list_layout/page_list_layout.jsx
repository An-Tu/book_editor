import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import './page_list_layout.scss';

const b = bemCl('page-list-layout');

const PageListLayout = ({ content, controls }) => (
  <div className={b()}>
    <div className={b('controls')}>{controls}</div>
    <div className={b('content')}>{content}</div>
  </div>
);

PageListLayout.propTypes = {
  content: PropTypes.element.isRequired,
  controls: PropTypes.element.isRequired,
};

export default PageListLayout;
