import { getMinsSinceBeginningDay } from './getMinutesPassedSinceBeginningDay';

describe('get minutes passed since of the beginning day', () => {
  test('get minutes passed since of the beginning day', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    const now = new Date();
    const minsSinceBeginningDay = (now.getHours() * 60) + now.getMinutes();
    getMinsSinceBeginningDay();
    // eslint-disable-next-line no-console
    expect(console.log.mock.calls[0][0]).toBe(minsSinceBeginningDay);
  });
});
