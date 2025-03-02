const myFunc = () => {
    console.log("You will not see this one!");
};

// const timerId = setTimeout(myFunc, 0);
// clearTimeout(timerId);

// const timerId = setInterval(my);
// clearInterval(timerId);
console.log("START")
const timerId = setImmediate(myFunc);
console.log("END")
// clearImmediate(timerId);