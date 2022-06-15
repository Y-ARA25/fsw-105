// Week 3 Pause and Practice: Building JS Functions to Keep Code DRY 

// #1
function addition(a, b) {
	return a + b;
}

var sum = addition(10, 20)
console.log("Sum is: " + sum);

console.log("----------")

// #2 
function bigNumber(a, b, c){
   return Math.max(a, b, c)
}

var biggest = bigNumber(2, 4, 6)
console.log("The biggest number is " + biggest)

console.log("--------")

// #3
function oddOrEven(){
    for(var i = 0; i <= 1; i++)
        if(i % 2 == 0){
            console.log("Even");
        } 
        else {
            console.log("Odd")
        }
}

oddOrEven();

console.log("---------")

// #4
function sliceOfCake(){
    let text = "Hellooo Dolly";
    if(text.length <= 20){
        console.log(text.slice(0, 6) + " " + text.slice(8, 13));
    }
    else{
        console.log(text.slice(0, 6));
    }
}

sliceOfCake();

