function recursiveAddArr(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + recursiveAddArr(arr.slice(1));
}

console.log(recursiveAddArr([1, 2, 3, 9]));
