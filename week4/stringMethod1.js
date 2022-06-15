// Complete the Pause and Practice: String Methods 

// #1
function capitalizeAndLowercase(str){
    var upperAndLower = str.toUpperCase() + str.toLowerCase();
    return upperAndLower;
}

console.log("---------")
console.log(capitalizeAndLowercase("Hello"));
console.log(capitalizeAndLowercase("HelloHowAreYou"));

// #2
function findMiddleIndex(str){
    var middleOfString = Math.floor(str.length / 2);
    return middleOfString;
}

console.log("---------")
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("HelloHowAreYou"));

// #3
function returnFirstHalf(str){
    var halfOfString = str.slice(0, findMiddleIndex(str));
    return halfOfString;
}

console.log("---------")
console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("HelloHowAreYou"));

// #4
function capAndLow(str){
    if(str.slice(beginIndex)){
        return str.toUpperCase;
    }
    else{
        return str.toLowerCase;
    }
}
// I'm not sure how else to word the syntax for this function, it's been giving me a lot of issues..
// I'm not positive if I'm supposed to actually use the term beginIndex
console.log("--------");
console.log(capAndLow("hello"));
console.log(capAndLow("helloHowAreYou"));