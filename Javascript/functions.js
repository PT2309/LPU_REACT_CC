// Functions
// 'use strict';

// greeting();
// greet();

// // Function declaration
// function greeting(){
//     console.log('Good Morning');
// }

// // function expression
// var greet = function(){
//     console.log('Greetings Everyone!');
// }

// console.log(str);
// console.log(val);

// var str = 'some value';
// let val = 'let value';



// Primtive and reference

// Stack Memory
    // let name = new String('Jon');
    // let num = new Number(34);
    // let bool = new Boolean(true);

// Heap memory
    // let undef =  new Object(null);
    // let obj = { name: 'Jake', age: 10}

    // console.log(name, num, bool, undef, obj);

    // const age = 10;
    // let ageTwo = age;

    // age = 12;

    // console.log(age, ageTwo);

    // const obj = { name: 'Jake', age: 10}
    // let newObj = obj;

    // obj.age = 15;
    // console.log(newObj.age);

    // const myFunc = function(){
    //     let name = 'Jake';
    //     console.log(name);
    // }

    // myFunc = function(){
    //     console.log('new Func');
    // };

    // myFunc();

// Functions - expression, declaration, callbacks

    // function areaOfSquare(sides=1){ // Parameters
    //     if(typeof sides === 'number'){
    //         console.log('Area of a square', sides**2);
    //     }else{
    //         console.log('Enter correct value');
    //     }
    // }


    // let areaOfCircle = function(radius=1){
    //     const PI = 3.14;
    //     console.log('Area of Circle', PI*radius**2);
    // };


    // areaOfSquare(10); // arguments

    // areaOfCircle(); // arguments


// Arrow Functions es6 & Callback
// Functional Programming - JS is all about

    // const areaOfSquare = (sides, shape='square') => {
    //     console.log(shape);    
    //     return sides**2;
    // };

    // const display = (myFunc, shape) => {
    //     let value = 10;
    //     console.log(myFunc(value, shape));
    // };

    // let shape = 'circle';
    // display(areaOfSquare, shape);

