// **setInterval(Put a delayed operation in a loop)

// setInterval(() => {
//     console.log("Hello every 2 seconds");
// }, 2000);

function my(){
    console.log("Hello every 2 seconds");
}

const timerId = setInterval(my,2000);

setTimeout(() => {
    // console.log("Hello after 4 seconds");
    clearInterval(timerId);
}, 6 * 1000);