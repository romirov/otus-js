import { sumArrayElements } from './sumArrayElements';

describe('summury of array elements', () => {
  test('summury 10 elements 1 to 10 equals 55', () => {
    console.log = jest.fn();
    sumArrayElements();
    expect(console.log.mock.calls[0][0]).toBe(55);
  });
});
