import { getMonthByNumber } from './getMonthByNumber';

describe('get month by number', () => {
  test('get April by number 4', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    jest.spyOn(window, 'prompt').mockImplementation(() => '4');
    getMonthByNumber();
    // eslint-disable-next-line no-console
    expect(console.log.mock.calls[0][0]).toBe('April');
  });
});
