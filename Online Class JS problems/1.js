// 1.	Write two functions to calculate Fibonacci numbers:
// fibRecursive(n) → recursive approach
// fibIterative(n) → loop approach
// Compare which one is faster when n = 40.
function fibRecursive(n) {
    if (n==1 || n==2) {
        return 1;
    }
    else{
        return fibRecursive(n-1) + fibRecursive(n-2);
    }
}
function fibIterative(n) {
    let a = 0, b = 1, c;
    if (n === 1) return a;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

console.time("Recursive Fibonacci");
console.log(`Fibonacci of ${n} (recursive): ${fibRecursive(n)}`);

console.timeEnd("Recursive Fibonacci");

console.time("Iterative Fibonacci");
console.log(`Fibonacci of ${n} (iterative): ${fibIterative(n)}`);
console.timeEnd("Iterative Fibonacci");

// Enter a number: 40
// Fibonacci of 40 (recursive): 102334155
// Recursive Fibonacci: 2.189s
// Fibonacci of 40 (iterative): 102334155
// Iterative Fibonacci: 0.829ms