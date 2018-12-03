
// #1 top-level code runs when modular is loaded
const button = document.getElementById('button');

// #2 subscribe to button click
button.addEventListener('click', () => {
    // #4 this doesn't happen, until the button is clicked
    
    // #5 promise syntax, call is made
    callApi().then(result => {
        // #7 this runs when we get a response from the server
        console.log(result);
    });

    // #6 this runs immediately after #5
    console.log('api call started');
});

// #3 this runs after #2
console.log('hello');