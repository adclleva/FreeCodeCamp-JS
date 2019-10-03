// Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
function findElement(arr, func) {
  return arr.find(func);
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
// function findElement(arr, func) {
//   let num = 0;
//
//   for(var i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
//
//   return undefined;
// }
