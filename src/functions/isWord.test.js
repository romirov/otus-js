import { isWord } from "./isWord";

describe('check string on words', () => {
    test('one word equals true', () => {
         expect(isWord("one")).toBe(true);
    });

    test('two words equals false', () => {
        expect(isWord("one two")).toBe(false);
   });
  });