export function getMonthByNumber() {
  const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const result = prompt('Enter month number: ');
  if (result > 1 && result <= 12) console.log(months[result]);
  else alert('Wrong month number');
}
