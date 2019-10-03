// Seek and Destroy
//
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  // Remove all the values
  let args = Array.from(arguments);
  let destroyVal = args.slice(1, args.length);

  return args[0].filter(element => {
    return !destroyVal.includes(element);
  });
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//
// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//   return arr.filter(function(val) {
//     return !args.includes(val);
//   });
// }
//
// const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));
