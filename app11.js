// Write a function which takes an array as a parameter containing 0's and returns this array placing 0's in the beginning of the array and the other numbers except for 0's in the same order as parameter array.

const sortZeros = (arr) => {
    if (!Array.isArray(arr)) alert("Parameter must be an array");

    let count = 0;
    const arrZeros = [];
    let resultArr = [];

    // for (const number of arr) { 
    //     if (arr.includes(0)) {
    //         let index = arr.indexOf(0);
    //         arr.splice(index,1);
    //         count++;
    //     }
    //     else break;
    // };  

    // Instead of while loop, we can use this for loop though;

    while (arr.includes(0)) {
        let index = arr.indexOf(0);
        arr.splice(index,1);
        count++;
    };

    arrZeros.length = count;
    arrZeros.fill(0,0,count);
    resultArr = arrZeros.concat(arr);
    return resultArr;
};


