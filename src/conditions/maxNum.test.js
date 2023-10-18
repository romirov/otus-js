import { maxNum } from './maxNum';

describe('max number', () => {
  test('max number 1 and 2 to equal 2', () => {
    console.log = jest.fn();
    maxNum(1, 2);
    expect(console.log.mock.calls[0][0]).toBe(2);
  });
});
