import { getDayOfWeekByDate } from "./getDayOfWeekByDate";

describe('get day of week by date', () => {
    test('get day by date 05.10.2023 equals Thursday', () => {
        console.log = jest.fn();
        jest.spyOn(window, "prompt").mockImplementation(() => "05.10.2023");
        getDayOfWeekByDate();
        expect(console.log.mock.calls[0][0]).toBe("Thursday");
    });

    test('get day by wrong day', () => {
        console.log = jest.fn();
        jest.spyOn(window, "prompt").mockImplementation(() => "2023.10.05");
        getDayOfWeekByDate();
        expect(console.log.mock.calls[0][0]).toBe("Wrong day format");
    });
  });