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

// Solution-2 :

let count2 = +prompt("Enter a number");
const fibonacci2 = [];

for (let i=0; i < count2; i++){

    while ((fibonacci2.length == 0) || (fibonacci2.length == 1)) {

        fibonacci2.push(i);
        break;
    }

    if (fibonacci2.length == 1) continue;

    else if (fibonacci2.length == 2) {

        fibonacci2[i+1] = fibonacci2[i] + fibonacci2[i-1];
    }

    else {

        fibonacci2[i] = fibonacci2[i-2] + fibonacci2[i-1];
    }

}

console.log(fibonacci2);