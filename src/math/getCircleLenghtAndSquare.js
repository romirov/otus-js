export function getCircleLenghtAndSquare() {
  const radius = prompt('Enter circle radius: ');

  const circleLenght = 2 * Math.PI * radius;
  const circleSquare = Math.PI * radius ** 2;
  console.log(`C = ${circleLenght}, L = ${circleSquare}`);
}
