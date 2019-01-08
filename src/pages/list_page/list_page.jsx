import React from 'react';
import BooksListContainer from 'src/containers/books_list';
import SortingContainer from 'src/containers/sorting';
import PageListLayout from 'src/layouts/page_list_layout';

const ListPage = () => (
  <PageListLayout content={<BooksListContainer />} controls={<SortingContainer />} />
);

export default ListPage;
