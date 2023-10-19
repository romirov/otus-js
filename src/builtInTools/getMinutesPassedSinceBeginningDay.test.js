import { getMinsSinceBeginningDay } from './getMinutesPassedSinceBeginningDay';

describe('get minutes passed since of the beginning day', () => {
  test('get minutes passed since of the beginning day', () => {
    // eslint-disable-next-line new-cap, no-template-curly-in-string
    Date.now = jest.fn().mockReturnValue(new Date('2023-10-19T23:59:00+03:00'));
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    // eslint-disable-next-line new-cap
    getMinsSinceBeginningDay(new Date.now());
    // eslint-disable-next-line no-console
    expect(console.log.mock.calls[0][0]).toBe(1439);
  });
});
