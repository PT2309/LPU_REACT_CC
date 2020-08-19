// Object Oriented Javascript


    // let user = {
    //     name: 'Jake',
    //     email: 'jake@abc.com',
    //     login() { 
    //         console.log('Inside Login', this);       
    //         console.log(name, 'has logged in!')
    //     },
    //     logout(){
    //         console.log(this);
    //         console.log(this.name, 'has logged out!')
    //     }
    // }

    // this.console.log(this);
    // user.login();
    // user.logout();

// Class Keyword - es6 syntatical Sugar

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.count = 0;
    }
    login(){
        console.log(this.email, 'has logged in!!')
        return this;
    }
    logout(){
        console.log(this.email, 'has logged out!!')
    }
    updateCount(){
        this.count++;
        return this;
    }
}

class SuperUser extends User{
    deleteUser(user){
        users = users.filter( u => {
            return user.email !== u.email
        })
    }
}

let userOne = new User('Jake', 'jake@abc.com');
let userTwo = new User('Jane', 'jane@abc.com');
let userThree = new User('Jay', 'jay@abc.com');
let userFour = new User('Jones', 'jones@abc.com');
let admin = new SuperUser('Admin', 'admin@abc.com');
console.log(userOne);

let users = [userOne, userTwo, userThree, userFour];

admin.deleteUser(userTwo);
admin.deleteUser(userOne);
admin.deleteUser(userThree);
admin.deleteUser(userFour);

console.log(users);

console.log( admin instanceof Object);