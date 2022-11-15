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
        console.log("Reject");
        reject(new Error("User not logged in"));
    }, 2000);

    setTimeout(() => {
        console.log("Resolve");
        resolve({
            user: {
                name: 'John',
                email: 'John@example.com'
            }
        })
    }, 1000);
});

promiseOne
    .then((user) => {
        console.log("Inside then")
        console.log(user);
    })
    .catch((err) => {
        console.log("Inside catch")
        console.log(err.message)
    });