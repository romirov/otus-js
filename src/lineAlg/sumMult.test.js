import { sumMult } from "./sumMult";

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        console.log = jest.fn();
        sumMult(1, 2)
        expect(console.log.mock.calls[0][0]).toBe(3);
    });
  });