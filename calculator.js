var readlineSync = require('readline-sync');

//Display Welcome Message
console.log("Welcome to FSW-105 Simple Calculator Program!")

//Read User Input Values
var firstNum = readlineSync.questionInt("Please enter your first number: ");
var secondNum = readlineSync.questionInt("Please enter your second number: ");
var userOperation = readlineSync.question("Please enter the operation to perform (add, sub, mul, div): ");

//Write four mathmatical functions
function myAddition(firstNum, secondNum){
    return firstNum + secondNum;
}

function mySubtraction(firstNum, secondNum){
    return firstNum - secondNum;
}

function myMultiplication(firstNum, secondNum){
    return firstNum * secondNum;
}

function myDivision(firstNum, secondNum){
    return firstNum / secondNum;
}

//result variable
let myCalculator;

//SWITCH STATMENT: My switch statement is going to cycle through each case until it matches with the userOperation input value
//Then it should return the result of the corresponding function
switch(myCalculator){
    case userOperation == "add":
    console.log("The sum of " + firstNum + " and " + secondNum + " is " + myAddition(firstNum, secondNum)); 
        break;

    case userOperation == "sub":
    console.log("The difference of " + firstNum + " and " + secondNum + " is " + mySubtraction(firstNum, secondNum)); 
        break;
    
    case userOperation == "div":
    console.log("The result of dividing " + firstNum + " and " + secondNum + " is " + myDivision(firstNum, secondNum)); 
        break;

    case userOperation == "mul":
    console.log("The result of multiplying " + firstNum + " and " + secondNum + " is " + myMultiplication(firstNum, secondNum)); 
        break;
    
    default:
    console.log("Sorry, your values are invalid!");
        break;
}