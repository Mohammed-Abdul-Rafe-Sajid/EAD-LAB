// 4.	Write a recursive function factorial(n) that returns factorial of a number.
// Example: factorial(5) → 120

function fact(n){
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
console.log(`Factorial of ${n} is: ${fact(n)}`);