import { validateDateByRegExp } from "./validateDateByRegExp";

describe('validate date by reg exp', () => {
    test('validate date by template dd.mm.yyyy', () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "05.10.2023");
        expect(validateDateByRegExp()).toBe(true);
    });

    test('validate date by wrong template dd MM yyyy', () => {
        console.log = jest.fn();
        jest.spyOn(window, "prompt").mockImplementation(() => "05 Oct 2023");
        expect(validateDateByRegExp()).toBe(false);
    });
  });