import { maxNum } from './maxNum';

describe('max number', () => {
  test('max number 1 and 2 to equal 2', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    maxNum(1, 2);
    // eslint-disable-next-line no-console
    expect(console.log.mock.calls[0][0]).toBe(2);
  });
});
