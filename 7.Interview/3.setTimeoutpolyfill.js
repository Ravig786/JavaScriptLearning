function createSetInterval() {
    let intervalId = 0;
    let intervalMap = {};

    function setIntervalPolyFill(callback, delay = 0, ...args) {
        let id = intervalId++;

        function repeat() {
            intervalMap[id] = setTimeout(() => {
                callback(...args)

                if (intervalMap[id]) {
                    repeat()
                }
            }, delay)
        }

        repeat()

        return id
    }

    function clearIntervalPolyFill(intervalId) {
        clearTimeout(intervalMap[intervalId])
        delete intervalMap[intervalId]
    }

    return {
        setIntervalPolyFill,
        clearIntervalPolyFill
    }
}


const {
    setIntervalPolyFill,
    clearIntervalPolyFill
} = createSetInterval()

let counter = 0;
let intervalId

function greeting() {
    counter++;
    console.log("hiii");

    if (counter >= 3) {
        clearIntervalPolyFill(intervalId)
    }

}

intervalId = setIntervalPolyFill(greeting, 2000);