console.log("START")
let obj_one = {
    firstName: 'Parag',
    lastName: 'Gaikwad',
    // fullName: 'Parag Gaikwad'
}
let x = obj_one?.fullName?.firstName
console.log(x)
if (x) {
    console.log("1")
} else {
    console.log("2")
}
console.log("END")

// Write a Code that will build an object containing the keys 
// as the integers of arrays and their values will be the count 
// of occurrences of that integer in the array. Add an integer to that object 
// only when its count of occurrence is greater than one.

// Input = [4, 6, 2, 8, 9, 2, 6, 7, 6] 

// output = {6: 3, 2: 2 }
/*
key : values
4 : 1
6 : 1
2 : 1
8 : 1
/*
// obj = {
  
}
 
*/

let list = [4, 6, 2, 8, 9, 2, 6, 7, 6];
let split_size = 6;

let copySplitSize = split_size;
let nestestArr = [];
let arr = [];

for (let i = 0; i < list.length; i++) {
  arr.push(list[i]);
  copySplitSize--;
  
  if (copySplitSize === 0 || i === list.length - 1) {
    nestestArr.push([...arr]);
    arr = [];
    copySplitSize = split_size;
  }
}

console.log(nestestArr);

let obj = new Object()

for (let i=0;i<list.length;i++){
  if (obj[list[i]] == null) {
    obj[list[i]] = 1
  }else{
    obj[list[i]] = obj[list[i]] + 1
  }
  // console.log(list[i])
}

let result = new Object()

for (let key in obj) {
  if(obj[key] > 1){
    result[key] = obj[key]
  }
}

console.log(result)