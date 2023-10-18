export function getMonthByNumber() {
  const months = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
  // eslint-disable-next-line no-alert
  const result = prompt('Enter month number: ');
  // eslint-disable-next-line no-console
  if (result > 1 && result <= 12) console.log(months[result]);
  // eslint-disable-next-line no-alert
  else alert('Wrong month number');
}
