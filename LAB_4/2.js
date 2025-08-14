const prompt = require("prompt-sync")();
const num=Number(prompt("Enter a number: "));
for (let i=1;i<=12;i++){
    console.log(`${num} x ${i} = ${num * i}`);
}