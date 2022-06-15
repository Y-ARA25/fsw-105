// Week 3 Pause and Practice: JavaScript Loops & Nesting Loops

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
var count = 0;

for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
        count++;
    }
}
console.log(count);  // -> 4

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];


//Loop #1: loop through an array and log to the console "old enough" or "not old enough"
function isOldEnough(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("You are old enough.");
        }
        else{
            console.log("Sorry, you are NOT old enough.");
        }
    }
}

console.log("-----------");
isOldEnough();

//Loops #2: Log in the console a personalized message.
function isOldEnoughWithName(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ", you are old enough to see Mad Max.");
        }
        else{
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ", you are NOT old enough to see Mad Max.");
        }
    }
}

console.log("-----------");
isOldEnoughWithName();

//Loops #3: Gender & age
function isOldEnoughWithNameAge(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE can see Mad Max.");
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE can see Mad Max.");
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see Mad Max. Don't let HIM in.");
        }
        else{
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max. Don't let HER in.");
        }
    }
}

/*I keep trying to figure out why the gender is not being properly applied to the two underage moviegoers. I think there is something 
wrong with my else statement, but everything I've tried has failed. I will keep working to try to understand why it's failing.*/

console.log("-----------");
isOldEnoughWithNameAge();

//Loops #4: Iterate through 101 numbers, i <= 100
function lotsOfNumbers(){
    for(var i = 0; i <= 100; i++)
        if(i % 2 == 0){
            console.log("Even");
        } 
        else {
            console.log("Odd")
        }
}

console.log("--------")
lotsOfNumbers();

//Extra Credit - Button

console.log("--------")

var lightButton = [2, 3, 2];
var count = 0;

for (var i = 0; i < lightButton.length; i++){
    if (lightButton[i] == 2){
        console.log("The light is on.")
    }
}

//I kind of ran out of time to properly attempt this extra credit, but I will take another crack at it