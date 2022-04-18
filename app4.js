// Finding Prime Numbers from zero to a desired number

const primeSet = [];
console.log(Array.isArray(primeSet)); // returns true
console.log(primeSet instanceof Array); // returns true
let number = +prompt("Enter a number:")

for (let i = 2; i <= number; i++) {
    for (let j = 2; j <= i; j++) {
        if ((i == 2) || (i == 3)) {

            primeSet.push(i);
            break;
        } else if (i == j) {

            primeSet.push(i);
            break;
        } else if (i % j == 0) {

            break;
        }
    }
}
console.log(primeSet);
const numberOfPrimeNumbers = primeSet.length;
console.log(`There are ${numberOfPrimeNumbers} prime numbers from zero to ${number}`);