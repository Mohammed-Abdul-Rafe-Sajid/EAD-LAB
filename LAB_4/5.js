// 5.	Find the factorial of a given number.
const prompt = require("prompt-sync")();
let n= Number(prompt("Enter a number:"));

let f=1;
for (let i=1;i<=n;i++){
    f=f*i;
}
console.log(`factorial of ${n} is ${f}`)