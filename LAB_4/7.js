const prompt=require('prompt-sync')();
let n=Number(prompt("enter "));
function fibonacci(n){
    let a=0,b=1,c;
    console.log(0);
    console.log(1);
    if(n===1) return a;
    if(n===2) return b;
    for(let i=3;i<=n;i++){
        c=a+b;
        a=b;
        b=c;
        console.log(c);
    }
    
}
fibonacci(n);