// 5.	Write a function filterEven(numbers) 
// that accepts an array and uses a callback function to filter only even numbers.
function filterEven(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
const prompt = require("prompt-sync")();
let input = prompt("Enter numbers separated by commas: ");
let numbers = input.split(",").map(Number);
let evenNumbers = filterEven(numbers);
console.log(`Even numbers: ${evenNumbers.join(", ")}`);
