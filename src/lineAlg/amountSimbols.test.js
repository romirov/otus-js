import { amountSimbols } from "./amountSimbols";

describe('sum string lenght', () => {
    test('adds string lenght 2 + string lenght 2 to equal 4', () => {
        console.log = jest.fn();
        amountSimbols("aa", "bb")
        expect(console.log.mock.calls[0][0]).toBe(4);
    });
  });