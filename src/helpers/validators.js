export const isRequired = value => (value != null ? undefined : 'Это поле обязательно');

export const maxLength = length => value =>
  value != null && value.length > length
    ? `Максимальное количесто символов ${length}, сейчас символов ${value.length}`
    : undefined;

export const mustBeNumber = value =>
  value != null && Number.isNaN(parseInt(value, 10)) ? 'Значение должно быть числом' : undefined;

export const inRange = (min, max) => value =>
  value != null && (value < min || value > max)
    ? `Число должно быть от ${min} до ${max}`
    : undefined;

export const minValue = min => value =>
  value != null && value < min ? `Значение должно быть больше чем ${min}` : undefined;

export const checkMinDate = min => value => {
  if (value == null) {
    return undefined;
  }
  const minTimestemp = min.getTime();
  return value >= minTimestemp
    ? undefined
    : `Дата не раньше ${min.getDate()}.${min.getMonth() + 1}.${min.getFullYear()}`;
};

const validateISBN10 = value => {
  const sum = value.reduce((acc, el, idx) => {
    const ch = idx === 9 && el.toLowerCase() === 'x' ? 10 : el;
    return acc + parseInt(ch, 10) * (10 - idx);
  }, 0);
  return sum % 11 === 0 ? undefined : 'Не верный ISBN';
};

const validateISBN13 = value => {
  const sum = value.reduce((acc, el, idx) => acc + parseInt(el, 10) * (idx % 2 === 1 ? 3 : 1), 0);
  return sum % 10 === 0 ? undefined : 'Не верный ISBN';
};

export const checkISBN = value => {
  if (value == null) {
    return undefined;
  }
  const isbn = value
    .trim()
    .replace(/-/g, '')
    .split('');

  if (isbn.length === 10) {
    return validateISBN10(isbn);
  }
  if (isbn.length === 13) {
    return validateISBN13(isbn);
  }
  return 'Не верный ISBN';
};

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
