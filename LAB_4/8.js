const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

let str_num = n.toString();
console.log("Digits in the number:", str_num.length);