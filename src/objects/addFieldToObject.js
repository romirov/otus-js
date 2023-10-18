function User(name) {
  this.name = name;
}

export const user = new User('John');

export function addFieldToObject() {
  // eslint-disable-next-line no-alert
  const age = prompt('Enter age: ');
  user.age = age;
}
