window.onload = function(){

    let countries = [];
    let capitals = [];

    // Create a table which displays country and its capital.
    $.ajax({
        type: 'GET',
        url: 'data/greeting.json',
        success: fetchGreeting,
        error: handleError
    });

    function fetchGreeting(data){
        console.log(data);
        $.ajax({
            type: 'GET',
            url: 'data/counntries.json',
            success: fetchCountries,
            error: handleError
        })
    }

    function fetchCountries(data){
        countries = [...data.countries];
        console.log(countries);
        $.ajax({
            type: 'GET',
            url: 'data/capitals.json',
            success: fetchCapitals,
            error: handleError
        })
    }

    function fetchCapitals(data){
        capitals = [...data.capitals];
        console.log(capitals);
    }

    function handleError(jqXHR, errorText, error){
            console.log(jqXHR,errorText, error);
    }

    console.log('This is the last line of code');

}