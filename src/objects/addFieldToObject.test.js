import { user } from "./addFieldToObject";
import { addFieldToObject } from "./addFieldToObject";

describe('objects', () => {
    test('objects equals', () => {
        expect(user).toMatchObject({"name":"John"})
        expect(user).toHaveProperty('name', 'John')
    });

    test('add age field to user', () => {
        jest.spyOn(window, "prompt").mockImplementation(() => 15);
        addFieldToObject()
        expect(user).toHaveProperty('age', 15)
    });
  });