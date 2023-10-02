import { multTable } from "./multTable";

describe('multTable', () => {
    test('multiplication table for 7', () => {
        console.log = jest.fn();
        multTable()
         expect(console.log.mock.calls[0][0]).toBe("7 * 1 = 7");
    });
  });