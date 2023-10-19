export function getMinsSinceBeginningDay(now) {
  // const now = new Date();
  const minsPassedSinceBeginningDay = (now.getHours() * 60) + now.getMinutes();
  // eslint-disable-next-line no-console
  console.log(minsPassedSinceBeginningDay);
}
