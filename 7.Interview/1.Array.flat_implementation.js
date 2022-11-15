let arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9],
    [10, 11, 12]
]
let flat_arr_one = [].concat(...arr);
console.log(flat_arr_one);

function customeFlat(arr) {
    let result = [];

    arr.forEach((ar) => {
        if (Array.isArray(ar)) {
            result.push(...customeFlat(ar));
        } else {
            result.push(ar);
        }
    });

    return result;
}

function customeFlat2(arr) {
    let result = [];

    arr.forEach(sarr => Array.isArray(sarr) ? result.push(...customeFlat2(sarr)) : result.push(sarr));

    return result;
}

function customeFlat_depth(arr, depth = 1) {
    let result = [];

    arr.forEach((ar) => {
        if (Array.isArray(ar) && depth > 0) {
            result.push(...customeFlat_depth(ar, depth - 1));
        } else {
            result.push(ar);
        }
    });
    return result;
}

let flat_arr_two = customeFlat2(arr);
let flat_arr_three = customeFlat_depth(arr, 2);
let flat_arr_four = arr.flat(1);

console.log("Custom Flat 2 ",flat_arr_two);
console.log("flat_arr_three");
console.log(flat_arr_three);

console.log("flat_arr_four");
console.log(flat_arr_four);