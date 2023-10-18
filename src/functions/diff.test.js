import { diff } from './diff';

describe('diff between 2 numbers', () => {
  test('diff between 10 and 40 equals 30', () => {
    expect(diff(10, 40)).toBe(30);
  });
});
