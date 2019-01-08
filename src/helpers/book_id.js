export const createId = book => {
  const { title, pages } = book;
  const authors = book.authors.reduce((acc, { name, lastname }) => `${acc}${name}${lastname}`, '');

  return `${title}/${authors}/${pages}`;
};
