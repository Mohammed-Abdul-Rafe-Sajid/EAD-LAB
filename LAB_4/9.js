const prompt = require("prompt-sync")();
let w= prompt("Enter a word: ");
let reversed_word = w.split("").reverse().join("");
console.log("Reversed word:", reversed_word);