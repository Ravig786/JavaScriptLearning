function add(x) {
  let sum = x;
  function resultFn(y) {
    sum += y;
    return resultFn;
  }
  resultFn.valueOf = function () {
    return sum;
  };
  return resultFn;
}

let result = add(2)(3);
// console.log(result.valueOf());
console.log(add(2)(3)(4)(5).valueOf());


function sum(x) {
    return function(y) {
        return y !== undefined ? sum(x + y) : x;
    };
}

// Example Usage:
console.log(sum(1)(2)(3)(4)()); // Output: 10
console.log(sum(1)()); // Output: 1
console.log(sum(5)(10)(15)(20)(25)()); // Output: 75
