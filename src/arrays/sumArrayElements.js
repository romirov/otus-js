export const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function sumArrayElements() {
  const initialValue = 0;
  const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

  console.log(sumWithInitial);
}
