import { amountSimbols } from './amountSimbols';

describe('sum string lenght', () => {
  test('adds string lenght 2 + string lenght 2 to equal 4', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    amountSimbols('aa', 'bb');
    // eslint-disable-next-line no-console
    expect(console.log.mock.calls[0][0]).toBe(4);
  });
});
