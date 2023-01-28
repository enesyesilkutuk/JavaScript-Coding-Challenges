// Write a function that checks if the date given as a parameter is valid or not

function isDateValid(date) {
    return !Number.isNaN(new Date(date).valueOf());
};

console.log(isDateValid("December 27, 2022 15:00:00")); // returns true
console.log(isDateValid("December 32, 2022 15:00:00")); // returns false

// Here we have a function that will take a date string and return whether that date is valid or not.

// In this example, we can see that the 32nd of December doesn't exist.

// -----------------------------------------------------------------------

// Javascript has no built-in capitalize function. Write a function that only converts the first letter of the string given as a parameter to upper-case.

function capitalize(str) {
    str = str.toLocaleLowerCase();
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};

console.log(capitalize("wasHİngTOn")); // returns Washington
