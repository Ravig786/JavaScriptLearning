// ** promise -> a promise is just an object that basically gives us back either a result of an asynchronous operation or a failture of a asynchronous operation

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Got the user");
//         resolve({
//             user: "ravi",
//         });
//     }, 2000);
// });

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Got the user");
        reject(new Error("User not logged in"));
    }, 2000);
});

promiseOne
    .then((user) => {
        console.log(user);
    })
    .catch((err) => console.log(err.message));