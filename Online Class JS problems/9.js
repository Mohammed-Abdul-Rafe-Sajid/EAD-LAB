// 9.	Write a function bankAccount(initialBalance) that returns an object with two methods:
// deposit(amount) → adds money
// withdraw(amount) → subtracts money (if balance allows)
// Example:
// 	let account = bankAccount(1000);
// account.deposit(500);  // Balance: 1500
// account.withdraw(200); // Balance: 1300
function bankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: ${amount}. New Balance: ${balance}`);
            } else {
                console.log("Deposit amount must be positive.");
            }
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn: ${amount}. New Balance: ${balance}`);
            } else if (amount > balance) {
                console.log("Insufficient funds for withdrawal.");
            } else {
                console.log("Withdrawal amount must be positive.");
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}
const prompt = require("prompt-sync")();
let initialBalance = Number(prompt("Enter initial balance: "));
let account = bankAccount(initialBalance);
account.deposit(500);
account.withdraw(200);
console.log(`Final Balance: ${account.getBalance()}`);
