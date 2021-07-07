// First Way :
// let calc = function(num1, num2, calcType) {
//     if (calcType === "add") {
//         return num1 + num2;
//     } else if (calcType === "multiply") {
//         return num1 * num2;
//     }
// };

// console.log(calc(2, 3, "add"));


// Second Way:

// add two numbers
let add = function(a, b) {
    return a + b;
};

// multiply two numbers
let multiply = function(a, b) {
    return a * b;
};

// display the numbers
let printNumbers = function(a, b) {
    console.log(`Here are your two numbers ${a} , ${b}`);
};

// Calculate 
let calc = function(num1, num2, callback) {
    return callback(num1, num2);
};


console.log(calc(2, 3, add)); // add
console.log(calc(2, 3, multiply)); // multiply
console.log(calc(2, 3, printNumbers)); // print


console.log(calc(2, 3, function(a, b) {
    return a - b;
}));