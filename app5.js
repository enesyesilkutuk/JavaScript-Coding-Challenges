// Given a sentence, find the numbers which are higher than 150 inside that sentence and return an array sorting these numbers in an ascending order

let sentence = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.";
let revised = sentence.split(" ");
let numbers = [];

for (let i=0; i < revised.length; i++) {

   if ((typeof +revised[i] != NaN) && (+revised[i] > 150)) {

      numbers.push(revised[i]);
   }

}

numbers.sort(function (a, b) {
    return a - b
});

console.log(numbers);