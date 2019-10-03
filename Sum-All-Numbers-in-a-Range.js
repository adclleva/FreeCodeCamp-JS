//Intermediate Algorithm Scripting: Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

//The lowest number will not always come first.

function sumAll(arr) {
    return arr[0] + arr[1];
}

console.log(sumAll([1,2]));
console.log(sumAll([1,1]));
console.log(sumAll([1,0]));
