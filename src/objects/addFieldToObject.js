function User(name){
    this.name = name;
}

export let user = new User("John");

export function addFieldToObject(){
    let age = prompt("Enter age: ");
    user.age = age;
}