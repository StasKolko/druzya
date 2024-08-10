import { classNames } from './classNames';

describe('classNames', () => {
  test('first test', () => {
    const expected = 'first';
    expect(classNames('first')).toBe(expected);
  });

  test('two string', () => {
    const expected = 'first second';
    expect(classNames('first', 'second')).toBe(expected);
  });

  test('list of string', () => {
    const expected = 'first second third fourth';
    const args = ['first', 'second'];
    expect(classNames(...args, ['third', 'fourth'])).toBe(expected);
  });

  test('object', () => {
    const expected = 'first';
    expect(classNames({
      first: true,
      second: false,
      third: null,
      fourth: undefined,
      fifth: 'true',
      '': true,
    })).toBe(expected);
  });
});
