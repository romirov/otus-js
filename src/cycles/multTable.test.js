import { multTable } from './multTable';

describe('multTable', () => {
  test('multiplication table for 7', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    multTable();
    // eslint-disable-next-line no-console
    expect(console.log.mock.calls[0][0]).toBe('7 * 1 = 7');
  });
});
