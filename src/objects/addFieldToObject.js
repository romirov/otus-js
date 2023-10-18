function User(name) {
  this.name = name;
}

export const user = new User('John');

export function addFieldToObject() {
  const age = prompt('Enter age: ');
  user.age = age;
}
