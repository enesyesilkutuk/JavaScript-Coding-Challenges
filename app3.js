// Fibonacci Series

// Solution-1 :

let count = +prompt("Enter a number");
const fibonacci = [];

for (let i=0; i < count; i++){

    while ((i==0) || (i==1)){

        fibonacci.push(i);
        break;
    }

    if ((i == 0) || (i == 1)) continue;

    // fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];

}

console.log(fibonacci);