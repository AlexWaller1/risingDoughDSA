# Callback Functions

A callback is a function passed into another function as an argument, which is then invoked to complete some kind of routine or action.

Here is a quick example:

function greeting(name) {
alert(`Hello, ${name}`);
}

function processUserInput(callback) {
let name = prompt('Please enter your name.');
callback(name);
}

processUserInput(greeting);

The above example is a synchronous callback, as it is executed immediately.

Note, however, that callbacks are often used to continue code execution after an asynchronous operation has completed--these are called asynchronous callbacks. A good example is the callback functions executed inside a .then() block chained onto the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such as fetch().
