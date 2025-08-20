// 2.	Create a function createPasswordManager() that returns methods to setPassword, validatePassword, and resetPassword.
// Password should not be directly accessible outside.
// You (Students) should analyze how closures keep private data safe.
function createPasswordManager() {
    let password = null;

    function setPassword(newPassword) {
        password = newPassword;
    }

    function validatePassword(inputPassword) {
        return password === inputPassword;
    }

    function resetPassword() {
        password = null;
    }

    return {
        setPassword,
        validatePassword,
        resetPassword
    };
}

const prompt = require("prompt-sync")();
let passwordManager = createPasswordManager();
let choice;
do {
    console.log("\nPassword Manager Menu:");
    console.log("1. Set Password");
    console.log("2. Validate Password");
    console.log("3. Reset Password");
    console.log("4. Exit");
    
    choice = Number(prompt("Enter your choice: "));

    switch (choice) {
        case 1:
            let newPassword = prompt("Enter new password: ");
            passwordManager.setPassword(newPassword);
            console.log("Password set successfully.");
            break;
        case 2:
            let inputPassword = prompt("Enter password to validate: ");
            if (passwordManager.validatePassword(inputPassword)) {
                console.log("Password is valid.");
            } else {
                console.log("Invalid password.");
            }
            break;
        case 3:
            passwordManager.resetPassword();
            console.log("Password reset successfully.");
            break;
        case 4:
            console.log("Exiting Password Manager.");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
}
while (choice !== 4);