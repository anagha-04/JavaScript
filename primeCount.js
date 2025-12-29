// identify the total number of prime numbers in a given range

// identify the largest prime number in the given range

let startNum = 1;
let stopNum = 20;
let count = 0;

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
        count = count + 1;
    }
}

console.log("total prime numbers:", count);