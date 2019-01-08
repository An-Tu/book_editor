import {
  isRequired,
  maxLength,
  mustBeNumber,
  inRange,
  minValue,
  checkMinDate,
  checkISBN,
  composeValidators,
} from '../validators';

describe('isRequired tests', () => {
  test('string in - undefined out', () => {
    const res = isRequired('some value');
    expect(res).toBe(undefined);
  });

  test('empty string in - undefined out', () => {
    const res = isRequired('');
    expect(res).toBe(undefined);
  });

  test('bool in - undefined out', () => {
    const resTrue = isRequired(true);
    expect(resTrue).toBe(undefined);
    const resFalse = isRequired(false);
    expect(resFalse).toBe(undefined);
  });

  test('object in - undefined out', () => {
    const res = isRequired({});
    expect(res).toBe(undefined);
  });

  test('array in - undefined out', () => {
    const res = isRequired([]);
    expect(res).toBe(undefined);
  });

  test('undefined in - string out', () => {
    const res = isRequired(undefined);
    expect(res).toBe('Это поле обязательно');
  });

  test('null in - string out', () => {
    const res = isRequired(null);
    expect(res).toBe('Это поле обязательно');
  });
});

describe('maxLength tests', () => {
  const tmp = 'test';
  const validator = maxLength(tmp.length);

  test('value less then MAX_LENGTH - should return undefined', () => {
    const res = validator(tmp.slice(0, tmp.length - 1));
    expect(res).toBe(undefined);
  });

  test('value equal MAX_LENGTH - should return undefined', () => {
    const res = validator(tmp);
    expect(res).toBe(undefined);
  });

  test('value greater then MAX_LENGTH - should return string', () => {
    const resStr = `${tmp}aaa`;
    const res = validator(resStr);
    expect(res).toBe(
      `Максимальное количесто символов ${tmp.length}, сейчас символов ${resStr.length}`
    );
  });

  test('null/undefinde in - should return undefined', () => {
    const res = validator(undefined);
    expect(res).toBe(undefined);
    const resNull = validator(null);
    expect(resNull).toBe(undefined);
  });
});

describe('mustBeNumber tests', () => {
  test('valid stirng given - should return undefined', () => {
    const res = mustBeNumber('123');
    expect(res).toBe(undefined);
    const res2 = mustBeNumber('-1000');
    expect(res2).toBe(undefined);
  });

  test('undefined/null given - should return undefined', () => {
    const res = mustBeNumber(undefined);
    expect(res).toBe(undefined);
    const res2 = mustBeNumber(null);
    expect(res2).toBe(undefined);
  });

  test('invalid stirng given - should return undefined', () => {
    const res = mustBeNumber('ff');
    expect(res).toBe('Значение должно быть числом');
  });
});

describe('inRange tests', () => {
  const min = 0;
  const max = 15;
  const validator = inRange(min, max);

  test('validator called with number from rangen - should return undefined', () => {
    const res = validator(5);
    expect(res).toBe(undefined);
  });

  test('validator called with min number from rangen - should return undefined', () => {
    const res = validator(min);
    expect(res).toBe(undefined);
  });

  test('validator called with max number from rangen - should return undefined', () => {
    const res = validator(max);
    expect(res).toBe(undefined);
  });

  test('null/undefined in - should return undefined', () => {
    const res = validator(undefined);
    expect(res).toBe(undefined);
    const res2 = validator(null);
    expect(res2).toBe(undefined);
  });

  test('value less then range - should return string', () => {
    const res = validator(min - 10);
    expect(res).toBe(`Число должно быть от ${min} до ${max}`);
  });

  test('value greater then range - should return string', () => {
    const res = validator(max + 10);
    expect(res).toBe(`Число должно быть от ${min} до ${max}`);
  });
});

describe('minValue tests', () => {
  const min = 15;
  const validator = minValue(min);

  test('value greater then min - should return undefined', () => {
    const res = validator(min + 10);
    expect(res).toBe(undefined);
  });

  test('value equal min - should return undefined', () => {
    const res = validator(min);
    expect(res).toBe(undefined);
  });

  test('value less then min - should return string', () => {
    const res = validator(min - 10);
    expect(res).toBe(`Значение должно быть больше чем ${min}`);
  });

  test('null/undefinde in - should return undefined', () => {
    const res = validator(undefined);
    expect(res).toBe(undefined);
    const res2 = validator(null);
    expect(res2).toBe(undefined);
  });
});

describe('checkMinDate tests', () => {
  const minDate = new Date(2000, 0, 1);
  const validator = checkMinDate(minDate);

  test('undefined/null in - should return undefined', () => {
    const res = validator(undefined);
    expect(res).toBe(undefined);
    const res2 = validator(null);
    expect(res2).toBe(undefined);
  });

  test('value greater then minDate - should return undefined', () => {
    const date = new Date(2010, 0, 1);
    const res = validator(date.getTime());
    expect(res).toBe(undefined);
  });

  test('value equal minDate - should return undefined', () => {
    const res = validator(minDate.getTime());
    expect(res).toBe(undefined);
  });

  test('value less then minDate - should return string', () => {
    const date = new Date(1990, 0, 1);
    const res = validator(date.getTime());
    expect(res).toBe(
      `Дата не раньше ${minDate.getDate()}.${minDate.getMonth() + 1}.${minDate.getFullYear()}`
    );
  });
});

describe('checkISBN tests', () => {
  const validISBN13 = '978-0-306-40615-7';
  const invalidISBN13 = '978-0-306-41615-7';
  const validISBN10 = '0-306-40615-2';
  const invalidISBN10 = '0-306-40619-2';
  const validISBN10WithX = '0-8044-2957-X';
  const invalidISBN10WithX = '0-8744-2957-X';
  const invalidStirg = 'dkjs';
  const invalidStirgLength10 = 'fratiescta';
  const invalidStirgLength13 = 'fratiesctiahl';

  const invalidRes = 'Не верный ISBN';

  test('null/undefined in - should return undefined', () => {
    const res = checkISBN(undefined);
    expect(res).toBe(undefined);
    const res2 = checkISBN(null);
    expect(res2).toBe(undefined);
  });

  test('validISBN13 in - should return undefined', () => {
    const res = checkISBN(validISBN13);
    expect(res).toBe(undefined);
  });

  test('invalidISBN13 in - should return string', () => {
    const res = checkISBN(invalidISBN13);
    expect(res).toBe(invalidRes);
  });

  test('validISBN10 in - should return undefined', () => {
    const res = checkISBN(validISBN10);
    expect(res).toBe(undefined);
  });

  test('invalidISBN10 in - should return string', () => {
    const res = checkISBN(invalidISBN10);
    expect(res).toBe(invalidRes);
  });

  test('validISBN10WithX in - should return undefined', () => {
    const res = checkISBN(validISBN10WithX);
    expect(res).toBe(undefined);
  });

  test('invalidISBN10WithX in - should return string', () => {
    const res = checkISBN(invalidISBN10WithX);
    expect(res).toBe(invalidRes);
  });

  test('invalidStirg in - should return string', () => {
    const res = checkISBN(invalidStirg);
    expect(res).toBe(invalidRes);
  });

  test('invalidStirgLength10 in - should return string', () => {
    const res = checkISBN(invalidStirgLength10);
    expect(res).toBe(invalidRes);
  });

  test('invalidStirgLength13 in - should return string', () => {
    const res = checkISBN(invalidStirgLength13);
    expect(res).toBe(invalidRes);
  });
});

describe('ccomposeValidators tests', () => {
  test('should call all function', () => {
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();
    const mockFn3 = jest.fn();

    const validator = composeValidators(mockFn1, mockFn2, mockFn3);
    const val = 'some value';

    validator(val);
    expect(mockFn1).toHaveBeenCalledTimes(1);
    expect(mockFn1).toHaveBeenCalledWith(val);
    expect(mockFn2).toHaveBeenCalledTimes(1);
    expect(mockFn2).toHaveBeenCalledWith(val);
    expect(mockFn3).toHaveBeenCalledTimes(1);
    expect(mockFn3).toHaveBeenCalledWith(val);
  });

  test('should return undefined', () => {
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();

    const validator = composeValidators(mockFn1, mockFn2);

    const res = validator('value');
    expect(res).toBe(undefined);
  });

  test('should return string', () => {
    const mockFn1 = jest.fn(() => 'mock 1');
    const mockFn2 = jest.fn();

    const validator = composeValidators(mockFn1, mockFn2);

    const res = validator('value');
    expect(res).toBe('mock 1');
  });
});
