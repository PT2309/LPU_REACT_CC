// Document Object Model

    // const list = document.getElementsByTagName('ul');
    // console.log(list);

    // const div = document.getElementById('list');
    // console.log(div);
    // div.style.background = 'lightgreen';

    // const items = document.getElementsByClassName('list-item');
    // console.log(items);

    // const itemArr = Array.from(items);
    // const randomColor = ['red', 'blue', 'green', 'yellow', 'peru'];

    // itemArr.forEach( (li, index) => {
    //     let i = Math.floor(Math.random() * randomColor.length);
    //     li.style.color = randomColor[i];
    // })

const listHeader = document.querySelector('#list h3');
const listItem = document.querySelectorAll('#list ul li');

listItem.forEach( item => {
    const newelement = document.createElement('a');
    console.log(newelement);
    newelement.href = 'form.html';
    item.textContent = '';
    newelement.textContent = 'Quick break';

    item.appendChild(newelement);
    // item.style.fontWeight = 'bold';
    // item.style.fontFamily = 'Arial';
    // item.style.letterSpacing = '2px';
})


console.log(document.forms);
const formElements = Array.from(document.forms[0].elements);


formElements.forEach( element => {
    console.log(element.value);
    welcome(element, element.value);   
})

function welcome(element, value){
    if(!value){
        element.style.border = '1px solid red';
    }else{
        element.style.border = '2px solid green';
    }
}

setTimeout( 
    () => { console.log('Waiting')}, 
    20000)