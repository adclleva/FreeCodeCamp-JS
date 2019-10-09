const piglatin = word => {
    let vowels = 'aeiouy'.split("")
    let qVowels = vowels.map(char => {
      return "q" + char
    });
    let punctuation = `,.?;\'!`

    let foundIndex = 0;
    let foundVowel = undefined;
    let foundQVowel = undefined;


    console.log(vowels);
    console.log(qVowels);

    for (let i = 0; i < vowels.length; i++) {
      let qVowel = qVowels[i];

      console.log(qVowel);

      if (word.includes(qVowel)) {
        foundQVowel = qVowel;
        foundIndex = word.indexOf(foundQVowel);
        break;
      }
    }

    if (foundQVowel == undefined) {
      for (let i = 0; i < vowels.length; i++) {
        let vowel = vowels[i];

        if (word.includes(vowel)) {
          foundVowel = vowel;
          foundIndex = word.indexOf(foundVowel);
          console.log(foundVowel, foundIndex)
          break;
        }
      }
    }

    console.log(word, word.indexOf(foundIndex), foundQVowel)

    if (foundQVowel) {
      let transLatedWord = (word.slice(foundIndex + 2) + word.slice(0, foundIndex + 2) + "ay")
      return transLatedWord

    } else if (foundVowel == word[0]) {
      console.log(foundVowel, word[0])
      return word + "way"

    } else if (foundVowel != word[0] && foundVowel) {
      let transLatedWord = (word.slice(foundIndex) + word.slice(0, foundIndex) + "ay")
      return transLatedWord

    } else {
      return word;
    }
}

console.log(piglatin("quick"));
console.log(piglatin("truck"));
console.log(piglatin("by"));
console.log(piglatin("apple"));
console.log(piglatin("squeal"));
console.log(piglatin("rhythm"));
