const yt = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Getting stuff from youtube");
        resolve({
            videos: [1, 2, 3, 4, 5],
        });
    }, 2000);
});
const fb = new Promise((resolve,reject) => {

    setTimeout(() => {
        console.log("Getting stuff from facebook");
        resolve({
            user: "Name",
        });
    }, 2000);
    
    setTimeout(() => {
        console.log("Getting error");
        reject({
            user: "Name",
        });
    }, 1000);
});

Promise.all([yt, fb]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});