import { sum } from './sum';

describe('sum', () => {
  test('sum from 50 to 100', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    sum();
    // eslint-disable-next-line no-console
    expect(console.log.mock.calls[0][0]).toBe(3825);
  });
});
