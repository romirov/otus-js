import { getCircleLenghtAndSquare } from './getCircleLenghtAndSquare';

describe('get circle lenght and square', () => {
  test('get day by date 05.10.2023 equals Thursday', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    jest.spyOn(window, 'prompt').mockImplementation(() => '4.15');
    getCircleLenghtAndSquare();
    // eslint-disable-next-line no-console, max-len
    expect(console.log.mock.calls[0][0]).toBe('C = 26.075219024795285, L = 54.106079476450226');
  });
});
