// ------------- Reversed Text Question --------------

let text = prompt("Enter a text:");
let reversedText = "";

for (let i=text.length-1; i>=0; i--) {
    reversedText += text[i];
}

console.log(reversedText);


// ------------ Reversed Text Question with While Loop ---------------

let text = prompt("Enter a text:");
let reversedText = "";
let character = text.length;

while (character == 1){  // text entered by the user should be longer than one character!
   text = prompt("Enter a longer text:"); 
   character = text.length; 
}

for (let i=character-1; i>=0; i--) {
    reversedText += text[i];
}

console.log(reversedText);


// ------------- Reversed Text Question with Function ------------

function reversing(text) {
    
    return text.split("").reverse().join("");
  }
  
  let sentence = prompt("Enter a sentence:");
  console.log(reversing(sentence));
