// Given a non-negative integer n, count all numbers with unique digits, x,
// where 0 <= x <= 10**n
// Example: 
// Input: 2
// Output: 91
// Explanation: The answer should be the total numbers in the range of 0 <= x <= 100, excluding 11

// Constraints: 0 <= n <= 8

function removeDuplicateDigits(n) {
    if (n < 0 || n > 8) {
        alert("Digit is not in the interval");
        return;
    };
    const resultArray = [];
    const max = Math.pow(10,n);
    for (let i=0; i <= max; i++) {
        if (new Set(i.toString()).size !== i.toString().length) continue;
        else {
            resultArray.push(i);
        }
    }
    return resultArray.length;
};

removeDuplicateDigits(2); // returns 91
removeDuplicateDigits(3); // returns 739
removeDuplicateDigits(5); // returns 32491

console.time("calculation time");
removeDuplicateDigits(8); // returns 2345851
console.timeEnd("calculation time"); // approximately 63000 ms