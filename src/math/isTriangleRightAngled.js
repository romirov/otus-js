// eslint-disable-next-line consistent-return
export function isTriangleRightAngled(...args) {
  const sides = args.slice(0, 3).sort();
  if (sides[0] + sides[1] <= sides[2]) {
    return false;// Треугольник не существует
  }

  const sum = (sides[0] ** 2 + sides[1] ** 2).toFixed(2);
  const side = (sides[2] ** 2).toFixed(2);

  if (sum === side) { return true; } // Треугольник прямоугольный
  if (sum < side) { return false; } // Треугольник тупоугольный
  if (sum > side) { return false; } // Треугольник остроугольный
}
