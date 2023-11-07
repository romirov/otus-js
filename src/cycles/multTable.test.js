import { multTable } from './multTable';

describe('multTable', () => {
  test('multiplication table for 7', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    multTable();
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= 8; i++) {
      const result = `7 * ${i + 1} = ${7 * (i + 1)}`;
      // eslint-disable-next-line no-console
      expect(console.log.mock.calls[i]).toEqual([result]);
    }
  });
});
