export function getMinutesPassedSinceBeginningDay() {
  const now = new Date();
  const minutesPassedSinceBeginningDay = (now.getHours() * 60) + now.getMinutes();
  console.log(minutesPassedSinceBeginningDay);
}
