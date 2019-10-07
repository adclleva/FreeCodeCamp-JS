// Convert HTML Entities
// Convert the characters &, <, >, "(double quote), and '(apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  const entitiesHTML = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  // &colon;&rpar;
  return str.split("").map(char => {
    return entitiesHTML[char] == undefined ? char: entitiesHTML[char];
  }).join("");
}

console.log(convertHTML("Dolce & Gabbana"));

// function convertHTML(str) {
//       // Use Object Lookup to declare as many HTML entities as needed.
//       htmlEntities={
//         '&':'&amp;',
//         '<':'&lt;',
//         '>':'&gt;',
//         '"':'&quot;',
//         '\'':"&apos;"
//       };
//       //Use map function to return a filtered str with all entities changed automatically.
//       return str.split('').map(entity => htmlEntities[entity] || entity).join('');
//     }
//
//     // test here
//     convertHTML("Dolce & Gabbana");
