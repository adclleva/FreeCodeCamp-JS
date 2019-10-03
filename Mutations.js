// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase().split("");
  console.log(word2);

  return word2.every(char => {
    return word1.indexOf(char) > -1;
  });
}

console.log(mutation(["floor", "for"]));

// function mutation(arr) {
//   var test = arr[1].toLowerCase();
//   var target = arr[0].toLowerCase();
//   for (var i=0;i<test.length;i++) {
//     if (target.indexOf(test[i]) < 0)
//       return false;
//   }
//   return true;
//  }
