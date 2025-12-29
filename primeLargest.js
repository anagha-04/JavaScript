// identify the largest prime number in the given range


let startNum = 1;
let stopNum = 20;
let largestPrime = -1;

for (let num = startNum; num <= stopNum; num++) {
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime == true) {
        largestPrime = num;
    }
}

console.log("Largest prime number:", largestPrime);