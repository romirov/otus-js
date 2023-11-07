export const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function sumArrayElements() {
  const initialVal = 0;
  const sumWithInitial = array.reduce((acc, value) => acc + value, initialVal);

  // eslint-disable-next-line no-console
  console.log(sumWithInitial);
}
