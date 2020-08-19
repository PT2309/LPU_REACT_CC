// Objects 

var student = {
    name: 'Harry',
    email: 'harry@hogwarts.com',
    regNo: 1234,
    enroll: true,
    login(){
        console.log('Student has logged in!!')
    },
    logout(){
        console.log('Student has logged out!!')
    },
    toLogIn(){
        console.log(this.name, 'logs in');
    }

};

student.login();
student.logout();


var str = new String('Some String');
console.log(str);
student.toLogIn();

//Add new property
    // student.isLogin = false;

//Accessing Properties
    // console.log(student['name']);
    // console.log(student.name);

    // var span= document.querySelector('#name');
    // console.log(typeof span.id);
    // span.textContent = student[span.id];

    // var spanTwo= document.querySelector('#regNo');
    // console.log(typeof spanTwo.id);
    // spanTwo.textContent = student[spanTwo.id];

// Array

// var hobbies = ['Reading', 'Coding', 'Playing Music', 'Sport'];
// console.log(hobbies);

// 
// var isLogin = new Boolean(true);
// console.log(isLogin);
// str= 'New String';
// console.log(str.valueOf());




