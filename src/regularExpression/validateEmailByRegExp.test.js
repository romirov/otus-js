import { validateEmailByRegExp } from './validateEmailByRegExp';

describe('validate email by reg exp', () => {
  test('validate email by template example@example.com', () => {
    // eslint-disable-next-line max-len
    jest.spyOn(window, 'prompt').mockImplementation(() => 'example@example.com');
    expect(validateEmailByRegExp()).toBe(true);
  });

  test('validate email by wrong template example#$@@@example.com', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    // eslint-disable-next-line max-len
    jest.spyOn(window, 'prompt').mockImplementation(() => 'xample#$@@@example.com');
    expect(validateEmailByRegExp()).toBe(false);
  });
});
