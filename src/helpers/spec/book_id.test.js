import { createId } from '../book_id';

test('createId test', () => {
  const book = {
    title: 'some title',
    authors: [
      {
        name: 'name1',
        lastname: 'lastname1',
      },
      {
        name: 'name2',
        lastname: 'lastname2',
      },
    ],
    pages: 100,
  };

  const { title, pages } = book;
  const authors = book.authors.reduce((acc, { name, lastname }) => `${acc}${name}${lastname}`, '');

  const bookId = createId(book);
  expect(bookId).toBe(`${title}/${authors}/${pages}`);
});
