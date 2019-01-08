export default (namespace, types) =>
  types.reduce((acc, type) => {
    acc[type] = `${namespace}/${type}`;
    return acc;
  }, {});
