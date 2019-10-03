// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//
// For example, getIndexToIns([1,2,3,4], 1.5)should return 1because it is greater than 1(index 0), but less than 2(index 1).
//
// Likewise, getIndexToIns([20,3,5], 19)should return 2because once the array has been sorted it will look like [3,5,20]and 19is less than 20(index 2) and greater than 5(index 1).
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return arr.concat(num).sort((a,b) => {return a - b}).indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));

//
// function getIndexToIns(arr, num) {
//   // sort and find right index
//   var index = arr.sort((curr, next) => curr > next)
//     .findIndex((currNum)=> num <= currNum);
//   // Returns proper answer
//   return index === -1 ? arr.length : index;
// }
//
// getIndexToIns([40, 60], 500);
