// 10.	Write a higher-order function memoize(fn) that caches results of a function. Use it for calculating factorials.
// Example:
// 	const memoFactorial = memoize(function factorial(n) {
//  	 return n <= 1 ? 1 : n * factorial(n - 1);
// });
// console.log(memoFactorial(5)); // 120 (calculated)
// console.log(memoFactorial(5)); // 120 (cached)
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const memoFactorial = memoize(factorial);
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number to calculate factorial: "));
console.log(`Factorial of ${n} is: ${memoFactorial(n)}`); // First call, calculated
console.log(`Factorial of ${n} is: ${memoFactorial(n)}`); // Second call, cached
