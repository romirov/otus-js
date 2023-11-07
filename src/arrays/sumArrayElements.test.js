import { sumArrayElements } from './sumArrayElements';

describe('summury of array elements', () => {
  test('summury 10 elements 1 to 10 equals 55', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    sumArrayElements();
    // eslint-disable-next-line no-console
    expect(console.log.mock.calls[0][0]).toBe(55);
  });
});
