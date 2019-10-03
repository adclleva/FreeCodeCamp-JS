// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
//
// The lowest number will not always come first.
function sumAll(arr) {
  let sum = 0;
  let num0 = arr[0];
  let num1 = arr[1];

  if (num0 > num1) { // if the first number is smaller than the second number
    num0 = arr[1];
    num1 = arr[0];

  }
  for (let i = num0; i <= num1; i++) {
    console.log(i);

    sum += i;
  }

  return sum;
}

console.log(sumAll([4, 1]));
//
// function sumAll(arr) {
//   let sum = 0;
//
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sum += i;
//   }
//
//   return sum;
// }
//
// sumAll([1, 4]);
