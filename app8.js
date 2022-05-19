// Write a function that takes a string as a parameter and return the first non-repeating letter of the string.
// If all the letters in the string occur more than once, function returns -1.

const noRepeat = (str) => {

    const letters = [...new Set(str)];
  
    for (const i of letters) {
      let count = 0;
      for (const j of str) {
        if (i == j) {
          count++;
        }
      }
  
      if (count == 1) return i;
      else continue;
  }
     return -1
  }
  
  console.log(noRepeat("mehmet"));