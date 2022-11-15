const arr = [5, 1, 3, 2, 6];

// Double
// Triple
// Binary

// function double(x){
//     return 2*x;
// }

// function triple(x){
//     return 3*x;
// }

// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map(binary);
// console.log(output);

// ?filter

function isodd(x){
    return x%2;
}

// const output = arr.filter(isodd);
// const output = arr.filter(x => x%2);
// console.log(output);

// ?reduce

// function findSum(arr) {
//     let sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//         sum = sum + arr[index];
//     }
//     return sum;
// }
// console.log(findSum(arr));

// const output = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0);
// console.log(output);

// function findMax(arr) {
//     let max = arr[0];
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] > max) {
//             max = arr[index];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// const output2 = arr.reduce(function (acc, curr) {
//     return acc > curr ? acc : curr;
// }, 0);
// console.log(output2);

const users = [
    {
        firstName: "akshay",
        lastName: "saini",
        age: 26,
    },
    {
        firstName: "donald",
        lastName: "trump",
        age: 56,
    },
    {
        firstName: "elon",
        lastName: "musk",
        age: 50,
    },
    {
        firstName: "ravi",
        lastName: "gupta",
        age: 23,
    },
    {
        firstName: "deepika",
        lastName: "padukone",
        age: 26,
    },
    {
        firstName: "qwerty",
        lastName: "padukone",
        age: 26,
    }
];

// list of full name

const output = users.map(x => {
    return x.firstName + " " + x.lastName;
})
console.log(output);


const output2 = users.filter(x => {
    return x.age > 26;
})
console.log(output2);

console.log('---------------');

const output3 = users.reduce(function (acc, curr) {

    if (acc[curr.age]) {

       acc[curr.age].push(curr);

    } else {
        acc[curr.age] = new Array();
        acc[curr.age].push(curr);
    }

    return acc;

}, {});

console.log(output3);
