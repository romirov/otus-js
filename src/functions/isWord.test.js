import { isWord } from './isWord';

describe('check string on words', () => {
  test('one word equals true', () => {
    expect(isWord('one')).toBe(true);
  });

  test('another one word equals true', () => {
    expect(isWord('word')).toBe(true);
  });

  test('another one word with blank equals false', () => {
    expect(isWord('word ')).toBe(true);
  });

  test('two words equals false', () => {
    expect(isWord('one two')).toBe(false);
  });
});
