import { doubleArray } from "./ doubleArray";

describe('doubling of array', () => {
    test('summury 10 elements 1 to 10 equals ', () => {
        expect(doubleArray[0]).toBe(2);
        expect(doubleArray[9]).toBe(20);
    });
  });