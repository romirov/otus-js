export function getDayOfWeekByDate() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];
  // eslint-disable-next-line no-alert
  const dateStr = /\d{2}.\d{2}.\d{4}/.exec(prompt('Enter date(dd.MM.yyyy): '));
  if (dateStr !== null) {
    const date = new Date();
    date.setFullYear(
      dateStr[0].substring(6, 10),
      dateStr[0].substring(3, 5) - 1,
      dateStr[0].substring(0, 2),
    );
    const dayOfWeek = daysOfWeek[date.getDay()];
    // eslint-disable-next-line no-console
    console.log(dayOfWeek);
  } else {
    // eslint-disable-next-line no-console
    console.log('Wrong day format');
  }
}
