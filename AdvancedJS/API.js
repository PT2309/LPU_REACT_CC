// Events - keyboard event, mouse events, change , scroll, copy,

// const nameField = document.getElementById('name');

// nameField.onkeyup = function(event){
//     // console.log('Entered using keyboard', nameField.value);

//     // describeBox.value = event.target.value;
// }

// const describeBox = document.getElementById('describe');

// document.forms[1].onsubmit = function(event){
//     console.log(event);
//     const displayArea = document.getElementById('display');
//     if(!describeBox.value){
//         displayArea.style.display = 'none';
//     }else{
//         // displayArea.style.display = 'block';
//         const para = document.createElement('p');
//         para.textContent = describeBox.value;
//         para.classList.add('describe');
//         displayArea.replaceWith(para, displayArea.firstChild);
//     }
// }





// Asynchronous 

window.onload = function(){

    const URL = 'data/greeting.json';

    // XMLHttpRequest Asynchronous Javascript XML(AJAX)
    // HTTP Methods - GET, POST, PUT, DELETE
    const http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(http.readyState === 4 && http.status === 200){
            console.log(http.responseText);

            console.log(typeof http.responseText);
            const data = JSON.parse(http.responseText);
            const list = document.createElement('ul');
            data.message.forEach(element => {
               console.log(element.greet); 
            
               const item = document.createElement('li');
               item.textContent = element.greet;
                list.appendChild(item);

            });
            console.log(list);
            document.querySelector('#display').appendChild(list);
        }
    }
    // console.log(http);

    http.open('GET', URL);
    http.send(); // Asynchronous Call to data


    console.log('This statement is after the request has been made!');
}