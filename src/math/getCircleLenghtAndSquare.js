export function getCircleLenghtAndSquare() {
  // eslint-disable-next-line no-alert
  const radius = prompt('Enter circle radius: ');

  const circleLenght = 2 * Math.PI * radius;
  const circleSquare = Math.PI * radius ** 2;
  // eslint-disable-next-line no-console
  console.log(`C = ${circleLenght}, L = ${circleSquare}`);
}
