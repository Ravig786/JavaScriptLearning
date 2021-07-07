// **Sync Code Example
// function otherFunct() {
//     console.log("We are in another function");
//     console.log("do some stuff");
// }

// console.log("Start");

// otherFunct();

// console.log("End");

// **Async Code
// **Example 1
// console.log("Start");

// setTimeout(() => {
//     console.log("We are in the timeout");
// }, 4000);

// console.log("End");

// **Example 2

console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data");
        callback({ userEmail: email, userPassword: password });
    }, 3000);
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(["video1", "video2", "video3", "video4"]);
    }, 2000);
}

function videoDetails(video, callback) {
    setTimeout(() => {
        callback("title of the video");
    }, 2000);
}

const user = loginUser("test123@email.com", "123456", (user) => {
    console.log(user);
    getUserVideos(user.userEmail, (videos) => {
        console.log(videos);
        videoDetails(videos[0], (title) => {
            console.log(title);
        });
    });
});

console.log("Finish");