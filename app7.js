// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.Example: 
// arr = [1, 3, 5, 7, 9]
// The minimum sum is  1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function returns : 16 24

function miniMaxSum(arr) {
    const final = [];
    let dif;
    for (let i=0; i < arr.length; i++) {
        dif = arr.splice(i,1);
        let sum = 0;
        for (let j=0; j < arr.length; j++) {
          sum += Number(arr[j]);
          //console.log(typeof(sum));
        }
        final.push(sum);
        arr.splice(i,0,dif);
        //console.log(final);
      }
      
  
      final.sort((a,b) => a-b);
      //console.log(final);
      return `${final[0]} ${final[final.length-1]}`
  }

  console.log(miniMaxSum([1,3,5,7,9])); // returns 16 24
  
// Solution-2 :

const findMinMax = arr => {
  const newArr = arr.sort((a,b) => a-b);
  const x = newArr.length;
  let minSum = 0;
  let maxSum = 0;
  for (let i=1; i < x; i++){
    maxSum += newArr[i];
  }
  for (let j=0; j < x-1; j++) {
    minSum += newArr[j];
  }

  return String(minSum) + " " + String(maxSum)
}

console.log(findMinMax([1,3,5,7,9])) // returns 16 24
