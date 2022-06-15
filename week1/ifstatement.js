/* If statement Olympics */
/* #1 */
if (5 > 3){
    console.log("5 is greater than 3.");
}

/* #2 Write an if statement that prints "is the length" */
var strCat = "Cat";
if (strCat.length == 3){
    console.log("The length of the string is correct.");
}
else {
    console.log("The length of the string is NOT correct.");
}

/* #3 */
var strAnimal1 = "cat"
var strAnimal2 = "dog"

if (strAnimal1 == strAnimal2){
    console.log("Both values, " + strAnimal1 + " and " + strAnimal2 + ", are equal.");
}
else{
    console.log("Both values, " + strAnimal1 + " and " + strAnimal2 + ", are equal.");
}

/* Bronze */

var person = {
    firstName: "Bobby",
    age: 12
};

/* I had to redefine firstName by itself in order for the String charAt() to work.
So I'm a bit confused by that. */
var firstName = "Bobby";

if (person.age >= 18){
    console.log("You can go to the movies!");
}
else{
    console.log("Sorry, you're too young to see the movie.");
}

/* Logic AND operator */
if (firstName.charAt(0) == "B" && person.age >= 18){
    console.log("Congrats, you can go to the movies!");
}
else{
    console.log("Sorry, you can not go to the movies.");
}


/* Silver */

/* Strict equality operator (===) */
if (1 === "1"){
    console.log("Strict.");
}
else if(typeof 1 === typeof "1"){
    console.log("not equal at all")
}
else{
    console.log("Loose.");
}


if (1 <= 2 && 2 == 4){
    console.log("yes");
}
/* I wasn't sure if there is supposed to be an else statement
 attached to this, the assignment didn't call for one, but I felt 
 like one might be needed.*/
/*
else{
    console.log("No");
} 
*/
