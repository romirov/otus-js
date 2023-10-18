import { sum } from './sum';

describe('sum', () => {
  test('sum from 50 to 100', () => {
    console.log = jest.fn();
    sum();
    expect(console.log.mock.calls[0][0]).toBe(3825);
  });
});
