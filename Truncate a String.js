// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ...ending.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
function truncateString(str, num) {

  return str.length <= num ? str : str.slice(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
