// const obj = {
//     a: '123',
//     b: '456',
//     c: (function () {
//         return "function";
//     })()
// }
// console.log(obj.c);
// const obj2 = obj;
// console.log(obj2.c);


// function* getSq() {
//     let n = 0;
//     while (true) {
//         n++;
//         yield n * n;
//     }
// }
// const seq = getSq()
// console.log(seq.next().value);
// console.log(seq.next().value);
var add = function (x) {
    return function (y) { return function (z) { return x + y + z } };
}

const ans = add(2)(3)(5);
console.log(ans);