import { getMinutesPassedSinceBeginningDay } from "./getMinutesPassedSinceBeginningDay";


describe('get minutes passed since of the beginning day', () => {
    test('get minutes passed since of the beginning day', () => {
        console.log = jest.fn();
        let now = new Date();
        let minutesPassedSinceBeginningDay = (now.getHours() * 60) + now.getMinutes();
        getMinutesPassedSinceBeginningDay();
        expect(console.log.mock.calls[0][0]).toBe(minutesPassedSinceBeginningDay);
    });
  });