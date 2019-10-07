// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//
// Check the assertion tests for examples.
//
function uniteUnique(...arr) {
  let uniqueArr = [];

  [...arr].forEach(array => {
    return array.forEach(element => {
      if (uniqueArr.indexOf(element) == -1){
        uniqueArr.push(element);
      }
    });
  });

  return uniqueArr;
}


uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);

// //jshint esversion:6
//
// function uniteUnique(...arrays) {
//
//   //make an array out of the given arrays and flatten it (using the spread operator)
//   const flatArray = [].concat(...arrays);
//
//   // create a Set which clears any duplicates since it's a regulat set and not a multiset
//   return [...new Set(flatArray)];
// }
//
// // test here
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//----------------------------------------------

// function uniteUnique() {
//   var concatArr = [];
//   var i = 0;
//   while (arguments[i]){
//     concatArr = concatArr.concat(arguments[i]); i++;
//   }
//   uniqueArray = concatArr.filter(function(item, pos) {
//     return concatArr.indexOf(item) == pos;
//   });
//   return uniqueArray;
// }
//
// // test here
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
