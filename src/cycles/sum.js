export function sum() {
  let summary = 50;
  // eslint-disable-next-line no-plusplus
  for (let i = 51; i <= 100; i++) {
    summary += i;
  }
  // eslint-disable-next-line no-console
  console.log(summary);
}
