console.log("Start");

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            resolve({ userEmail: email, userPassword: password });
        }, 3000);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3", "video4"]);
        }, 2000);
    });
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of the video");
        }, 2000);
    });
}

// loginUser("ed", "123456")
//     .then((user) => {
//         console.log(user);
//         return getUserVideos(user.userEmail);
//     })
//     .then((videos) => {
//         console.log(videos);
//         return videoDetails(videos[0]);
//     })
//     .then((details) => {
//         return console.log(details);
//     });

async function displayUser() {
    const loggedUser = await loginUser("ed", "123456");
    const videos = await getUserVideos(loginUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
}

displayUser();

console.log("Finish");