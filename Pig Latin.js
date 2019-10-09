// Pig Latin
// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
//
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let firstVowelIndex = str.search(/a|e|i|o|u|/);

  // also included edge-case if the string doesn't have a vowe

  return firstVowelIndex == -1 ? str + "ay" : (firstVowelIndex == 0 ? str + "way" :  str.slice(firstVowelIndex)+ str.slice(0,firstVowelIndex) + "ay");
}

console.log(translatePigLatin("by")); // byway

console.log(translatePigLatin("Monkey hel.")); //Monkey hel.way

console.log(translatePigLatin("apple")); // appleway


// function translatePigLatin(str) {
//     var strArr = [];
//     var tmpChar;
//
//     // check if the char is consonant using RegEx
//     function isConsonant(char) {
//         return !/[aeiou]/.test(char);
//     }
//
//     // return initial str + "way" if it starts with vowel
//     // if not - convert str to array
//     if (!isConsonant(str.charAt(0)))
//         return str + "way";
//     else
//         strArr = str.split("");
//
//     // push all consonats to the end of the array
//     while (isConsonant(strArr[0])) {
//         tmpChar = strArr.shift();
//         strArr.push(tmpChar);
//     }
//  // convert array to string and concatenate "ay" at the end
//  return strArr.join("")+"ay";
// }
//
// // test here
// translatePigLatin("consonant");
