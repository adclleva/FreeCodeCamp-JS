// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.forEach(element => {
    if (arr2.indexOf(element) == -1) {
      newArr.push(element);
    }
  });

    arr2.forEach(element => {
    if (arr1.indexOf(element) == -1 && newArr.indexOf(element) == -1) {
      newArr.push(element);
    }
  });

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// function diffArray(arr1, arr2) {
//   return arr1.filter(element => {
//     return arr2.indexOf(element) === -1;
//   }).concat(
//     arr2.filter(element => {
//       return arr1.indexOf(element) === -1
//     })
//   );
// }
//
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
