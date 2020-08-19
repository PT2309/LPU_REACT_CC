window.onload= function(){

    function fetch(url){
        return new Promise( (resolve, reject ) => {
            const http = new XMLHttpRequest();
            http.open('GET', url);
            http.onload = () => {
                if(http.status === 200){
                    resolve(JSON.parse(http.responseText));
                }else{
                    reject(http.statusText);
                }
            }
            http.onerror = () => {
                reject(http.statusText);
            }
            http.send();
        });
    }

    let promise = fetch('data/greeting.json');

    console.log(promise);
    promise
    .then( data => {
        console.log(data);
        return fetch('data/countries.json')
    })
    .then( data => {
        console.log(data)
        return fetch('data/capitals.json')
    }).then( data => console.log(data));
}