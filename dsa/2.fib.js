function fibonacciRecursiveAsync(n) {
    return new Promise((resolve) => {
        function fibonacciRecursive(n) {
            if (n <= 1) return n;
            return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
        }
        resolve(fibonacciRecursive(n));
    });
}

function fibonacciMemoizationAsync(n) {
    return new Promise((resolve) => {
        function fibonacciMemoization(n, memo = {}) {
            if (n in memo) return memo[n];
            if (n <= 1) return n;
            memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
            return memo[n];
        }
        resolve(fibonacciMemoization(n));
    });
}
async function executeFibonacciParallel(n) {
    console.time("Parallel Execution");

    const [recursiveResult, memoizedResult] = await Promise.all([
        fibonacciRecursiveAsync(n),
        fibonacciMemoizationAsync(n)
    ]);

    console.timeEnd("Parallel Execution");

    console.log(`Memoized Fibonacci(${n}):`, memoizedResult);
    console.log(`Recursive Fibonacci(${n}):`, recursiveResult);
}

// Example Execution
executeFibonacciParallel(10);
