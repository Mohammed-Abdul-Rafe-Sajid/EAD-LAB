// 3.	Write a function calculator(a, b, operation) that can add, subtract, multiply, divide, or find modulus based on the string given in operation.
// Example:
// 	calculator(10, 5, "add"); // 15
// calculator(10, 5, "divide"); // 2
// calculator(10, 5, "mod"); // 0
function calculator(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                return "Error: Division by zero";
            }
            return a / b;
        case "mod":
            return a % b;
        default:
            return "Error: Invalid operation";
    }
}
const prompt = require("prompt-sync")();
let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let operation = prompt("Enter operation (add, subtract, multiply, divide, mod): ").toLowerCase();
let result = calculator(a, b, operation);
console.log(`Result: ${result}`);
