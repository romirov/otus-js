import { validateEmailByRegExp } from "./validateEmailByRegExp";

describe('validate email by reg exp', () => {
    test('validate email by template example@example.com', () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "example@example.com");
        expect(validateEmailByRegExp()).toBe(true);
    });

    test('validate email by wrong template example#$@@@example.com', () => {
        console.log = jest.fn();
        jest.spyOn(window, "prompt").mockImplementation(() => "xample#$@@@example.com");
        expect(validateEmailByRegExp()).toBe(false);
    });
  });