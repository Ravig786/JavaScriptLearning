const myFunc = (param1, param2) => {
    try {
        console.log(param1 + param2 + ". It rocks");
    } catch (error) {
        console.log(error)
    }
};

// Key Takeaway
// Whenever using setTimeout, always pass a function reference, not a function execution.

setTimeout(myFunc, 2 * 1000, "Timers", " are great");

// setTimeout(myFunc("TImers are ","great 2 "), 1 * 1000);
