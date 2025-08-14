const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: ")); 
let reversed = 0;

while (n > 0) { 
    const digit = n % 10; 
    reversed = reversed * 10 + digit; 
    n = Math.floor(n / 10); 
}

console.log("Reversed number:", reversed);

