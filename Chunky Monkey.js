// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size(second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    let subArr = [];

    for (let j = 0; j < size; j++) {
      let ele = arr[i];

      if (ele === undefined) {
        break;
      }

      subArr.push(ele);
      i++;
    }

    newArr.push(subArr)
  }

  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
//
// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var arr2 = [];
//   for (var i = 0; i < arr.length; i+=size) {
//   arr2.push(arr.slice(i , i+size));
//   }
//   return arr2;
// }
//
// function chunkArrayInGroups(arr, size) {
//  // Break it up.
//  var newArr = [];
//  var i = 0;
//
//  while (i < arr.length) {
//    newArr.push(arr.slice(i, i+size));
//    i += size;
//  }
//  return newArr;
// }
// chunkArrayInGroups(["a", "b", "c", "d"], 2);
