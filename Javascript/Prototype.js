
function User(name, email, age){
    this.name = name;
    this.email = email;
    this.age = age;
}

User.prototype.login = function(){
    console.log('This is the login method', this.name);
}

User.prototype.logout = () => {
    console.log('This is the logout method');
}

//Prototype inheritence
function SuperUser(name, email, number){
    User.apply(this, [name, email, number])
}

SuperUser.prototype = Object.create(User.prototype);
SuperUser.prototype.deleteUser = function(user){
    users = users.filter( u => user.email !== u.email)
}

let newUser = new User('Prototype', 'abc@abc.com');
let newUser2 = new User('Prototype 2', 'abcd@abc.com');

let users = [newUser, newUser2];

let admin = new SuperUser('admin', 'admin@abc.com', 23);
console.log(admin);

// console.log(admin instanceof User);
// console.log(newUser);

console.log(users);
admin.deleteUser(newUser);
console.log(users);

let val = new Object(null);
console.log(val instanceof Object);



