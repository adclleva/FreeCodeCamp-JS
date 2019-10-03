// Slice and Splice
// You are given two arrays and an index.
//
// Use the array methods sliceand spliceto copy each element of the first array into the second array, in order.
//
// Begin inserting elements at index nof the second array.
//
// Return the resulting array. The input arrays should remain the same after the function runs.
//
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n));
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArray = arr2.slice();
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return localArray;
// }
