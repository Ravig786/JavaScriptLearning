// Basic Example 1.
let x = function() {
    console.log("i am called from inside a function");
}

let y = function(callback) {
    console.log('do something');
    callback();
}

y(x)