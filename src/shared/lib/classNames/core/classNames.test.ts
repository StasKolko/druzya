import { cn } from 'shared/lib/classNames';

describe('classNames', () => {
  test('first test', () => {
    const expected = 'first';
    expect(cn('first')).toBe(expected);
  });

  test('two string', () => {
    const expected = 'first second';
    expect(cn('first', 'second')).toBe(expected);
  });

  test('list of string', () => {
    const expected = 'first second third fourth';
    const args = ['first', 'second'];
    expect(cn(...args, ['third', 'fourth'])).toBe(expected);
  });

  test('object', () => {
    const expected = 'first';
    expect(cn({
      first: true,
      second: false,
      third: null,
      fourth: undefined,
      fifth: 'true',
      '': true,
    })).toBe(expected);
  });
});
