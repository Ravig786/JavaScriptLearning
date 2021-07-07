const userName = "Ravi Gupta";
let userAge = "22"
const userHasHobbies = true;

// function summarizedUser(useName, userAge, userHasHobby) {
//     return ('Name is ' + useName + ', age is ' + userAge + ' and the user has hobbies : ' + userHasHobby);
// }

const summarizedUser = (useName, userAge, useHasHobby) =>
    ('Name is ' + useName + ', age is ' + userAge + ' and the user has hobbies : ' + useHasHobby);

console.log(summarizedUser(userName, userAge, userHasHobbies));

const person = {
    name: 'Ravi Gupta',
    age: 22,
};
console.log(person);

const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

// Spread Operator
const copiedArray = [...hobbies];

console.log(copiedArray);

// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// }

// console.log(toArray(1, 2, 3));

// Rest operator
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));