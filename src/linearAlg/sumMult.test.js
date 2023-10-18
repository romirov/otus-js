import { sumMult } from './sumMult';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    sumMult(1, 2);
    // eslint-disable-next-line no-console
    expect(console.log.mock.calls[0][0]).toBe(3);
  });
});
