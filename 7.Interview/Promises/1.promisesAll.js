let p1 = new Promise(function (resolve, reject) {
    resolve('Promise 1 resolved');
})

let p2 = new Promise(function (resolve, reject) {
    reject('Promise 2 rejected');
})

let p3 = new Promise(function (resolve, reject) {
    resolve('Promise 3 resolved');
})

let p4 = new Promise(function (resolve, reject) {
    resolve('Promise 4 resolved');
})

let promiseAll = Promise.all([p1, p2, p3, p4]);

promiseAll.then((promiseArr) => {
    console.log(promiseArr);
}).catch((err) => console.log(err));