const myFunc = () => {
    console.log("You will not see this one!");
};

const timerId = setImmediate(myFunc);

//clearImmediate(timerId);