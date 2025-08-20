// 7.	Write a function greet(name = "Guest", time = "Day") that prints: "Good <time>, <name>!".
// Example:
// 	greet(); // "Good Day, Guest!"
// greet("Alice", "Morning"); // "Good Morning, Alice!"
function greet(name = "Guest", time = "Day") {
    console.log(`Good ${time}, ${name}!`);
}
const prompt = require("prompt-sync")();
let name = prompt("Enter your name: ");
let time = prompt("Enter the time of day: ");
greet(name, time);
greet();
