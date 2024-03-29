//
// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function findLongestWordLength(str) {
  return Math.max(...(str.split(" ").map(word => {
    return word.length;
  })));
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
