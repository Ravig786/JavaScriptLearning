function removeDuplicates(arr) {
    const map = new Map();
    const result = [];

    for (const item of arr) {
        if (!map.has(item)) {
            map.set(item, true);
            result.push(item);
        }
    }

    return result;
}


console.log(removeDuplicates([1,1,1,1,1,1,2,3,1,11,1,1,1,1,1,1]))

function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciMemoization(n, memo = {}) {
    if (n in memo) return memo[n];  // Check if result is already computed
    if (n <= 1) return n;  // Base case

    memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
    return memo[n];
}

console.log(fibonacciRecursive(10))
console.log(fibonacciMemoization(10))