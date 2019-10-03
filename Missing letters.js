// Missing letters
// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  let startIndex = alpha.indexOf(str[0]);
  let endIndex = alpha.indexOf(str[str.length - 1]);

  let compareAlphaStr = alpha.slice(startIndex, endIndex + 1);

  for (let i = 0; i < str.length; i++) {
    let charAlpha = compareAlphaStr[i];
    let charStr =  str[i];

    if (charAlpha != charStr) {
      return charAlpha;
    }
  }

}

fearNotLetter("abcdefghjklmno");

// function fearNotLetter(str) {
//   for (let i = 1; i < str.length; ++i) {
//     if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
//       return String.fromCharCode(str.charCodeAt(i - 1) + 1);
//     }
//   }
// }
