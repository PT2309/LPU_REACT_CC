// window.onload = function(){

//     // Return Promise Object
//     // $.get('data/greeting.json').then( data => {
//     //     console.log(data)
//     //     $.get('data/countries.json').then(data => {console.log(data)});
//     // })

//     // Heap Memory?
// // const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
// //   .then(response => response.json())
// //   .then(json => console.log(json))
     

//     setTimeout( () => {console.log(promise)}, 3000)

//     console.log(typeof promise );
// }

// Fetch, axios etc. 

// const NAME = Symbol();



// console.log(person[NAME]);

// const SLEEP = Symbol();

// person[SLEEP] = () => 'Person is Sleeping';

// console.log(person[SLEEP]());
// console.log(Symbol() === Symbol());
// console.log(NAME === SLEEP) // It is an Immutable Object

// const COOK = Symbol.for('a');

// const person = {
//     [NAME]: 'Jake',
//     [COOK]: 'Pasta'
// }

// console.log(person[Symbol.for('a')]);
// console.log(person[NAME]);
// console.log(Symbol.for('a') === Symbol.for('a'));


// a : Symbol();
// unique identity and immutable


function Pizza(){
    return(<h1>Heading</h1>)
}

console.log(Pizza());