// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str(first argument) for numtimes (second argument). Return an empty string if numis not a positive number.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function repeatStringNumTimes(str, num) {
  // repeat after me

  let repeatStr = "";

  if (num < 0) {
    return "";
  } else {
    for (var i = 0; i < num; i++) {
      repeatStr += str;
    }
  }

  return repeatStr;
}

console.log(repeatStringNumTimes("abc", 3));

// function repeatStringNumTimes(str, num) {
//   if(num < 0)
//     return "";
//   if(num === 1)
//     return str;
//   else
//     return str + repeatStringNumTimes(str, num - 1);
// }

// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str.repeat(num) : '';
// }
//
// repeatStringNumTimes("abc", 3);
