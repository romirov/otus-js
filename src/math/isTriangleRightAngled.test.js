import { isTriangleRightAngled } from "./isTriangleRightAngled";

describe('check is triangle right angled', () => {
    test('not is triangle', () => {
        expect(isTriangleRightAngled(2, 4, 6)).toBe(false);
    });

    test('check is triangle acute-angled', () => {
        expect(isTriangleRightAngled(8, 5, 7)).toBe(false);
    });

    test('check is triangle right angled', () => {
        expect(isTriangleRightAngled(3, 4, 5)).toBe(true);
    });

    test('check is triangle right obtuse', () => {
        expect(isTriangleRightAngled(7, 12, 8)).toBe(false);
    });
  });