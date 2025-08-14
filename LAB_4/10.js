function checki(n){
    for (let i=2;i<n;i++){
        if (n%i==0){
            return false
        }
    }
    return true;
}
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
if (checki(n)){
    console.log(`${n} is a prime number.`);
}
else {
    console.log(`${n} is not a prime number.`);
}
