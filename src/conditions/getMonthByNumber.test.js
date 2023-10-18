import { getMonthByNumber } from './getMonthByNumber';

describe('get month by number', () => {
  test('get April by number 4', () => {
    console.log = jest.fn();
    jest.spyOn(window, 'prompt').mockImplementation(() => '4');
    getMonthByNumber();
    expect(console.log.mock.calls[0][0]).toBe('April');
  });
});
