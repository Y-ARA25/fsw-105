/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var Enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

var i = 0; i < Enemies.length; i++;

var isThereKryptonite;

if (i % 2 === 0){
    isThereKryptonite = true;
} else {
    isThereKryptonite = false;
}

function whoWins(isThereKryptonite, Enemies);

console.log(whoWins(isThereKryptonite, Enemies[i]));

if (! isThereKryptonite){
    console.log("Superman beats " + Enemies + ", of course");
}
else{
    console.log("Depends on how quick Superman can get rid of the Kryptonite. " + Enemies + " could possibly win this one.");
}

function HowAttractedIsLoisLaneToMe(){
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Mat.random()*10)+1);
}

console.log(HowAttractedIsLoisLaneToMe());

var clarkKent = true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
}

var phoneBoothQuickChange = Math.random();
    
if (phoneBoothQuickChange >= 0.5) {
    clarkKent = false;
    superman = true;
    console.log("Now I'm Superman!");
}

