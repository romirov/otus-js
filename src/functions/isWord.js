export function isWord(str) {
  const array = String(str).split(' ');
  if (array.length === 1 || array[1] === '') {
    return true;
  }
  return false;
}
