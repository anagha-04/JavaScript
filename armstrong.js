// a number that equal the sum of its own digit,
// each raised to the power of the total number of digits in the number
// 153 >>> 1^3 + 5^3 + 3^3 = 153 is armstrong number


let num = 153

original_num = num

let sum = 0

len =String(num).length

while(num>0){

    lastdigit = num % 10

    sum += lastdigit ** len

    num = Math.floor(num/10)
}

console.log(sum==original_num?"armstrong number":"not amrstrong")


// find the sum of prime numbers in a given range

let start = 4

let stop = 30

let sums = 0

for (let num = start; num <= stop; num++) {

    if (num > 1) {

        let isPrime = true;

        for (let i = 2; i < num; i++) {

            if (num % i == 0) {

                isPrime = false;

                break;
            }
        }

        if (isPrime) {
            
            sums += num;
        }
    }
}

console.log(sums);

