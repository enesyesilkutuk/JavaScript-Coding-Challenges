// -------------- Math Operator Question with Switch-Case Structure ---------------

let numberOne = +prompt("Enter first number:");
let numberTwo = +prompt("Enter second number:");
let operator = prompt("Enter a math operator:");
let result;

switch (operator){

    case "+":
        result = numberOne + numberTwo;
        break;

    case "-":
        result = numberOne - numberTwo;
        break;

    case "*":
        result = numberOne * numberTwo;
         break;

    case "/":
        result = numberOne / numberTwo;
        break;

    default:
        result = "Try again please";
        break;
}

console.log(result);


// ------------------ Math Operator Question with Switch-Case Structure and While Loop ---------------

let numberOne = +prompt("Enter first number:");
let numberTwo = +prompt("Enter second number:");
let operator = prompt("Enter a math operator:");
const operators = ["+", "-", "*", "/"];
let state = operators.includes(operator);
let result;
while ((isNaN(numberOne)) || (isNaN(numberTwo)) || (!state)) {
    console.log("Please enter valid inputs:");
    numberOne = +prompt("Enter a valid first number:");
    numberTwo = +prompt("Enter a valid second number:");
    operator = prompt("Enter a valid math operator:");
    state = operators.includes(operator);
}

switch (operator) {

    case "+":
        result = numberOne + numberTwo;
        break;

    case "-":
        result = numberOne - numberTwo;
        break;

    case "*":
        result = numberOne * numberTwo;
        break;

    case "/":
        result = numberOne / numberTwo;
        break;
}

console.log(`Result: ${result}`);


// ------------------ Math Operator Question with Switch-Case Structure and Do-While Loop ---------------

let firstNumber, secondNumber, operator, final;
const set = ["+", "-", "*", "/"];

do {
    firstNumber = +prompt("Enter first number:");
    secondNumber = +prompt("Enter second number:");
    operator = prompt("Enter a math operator:");
} while (!((Number.isSafeInteger(firstNumber)) & (Number.isSafeInteger(secondNumber)) & (set.indexOf(operator) !== -1)));

switch (operator) {
    case "+":
        final = firstNumber + secondNumber;
        break;
    case "-":
        final = firstNumber - secondNumber;
        break;
    case "*":
        final = firstNumber * secondNumber;
        break;
    case "/":
        final = firstNumber / secondNumber;
        break;
}

console.log(`Result: ${final}`);