// check and print all the prime numbers in a given range

// 7

let start = 7

let stop = 50

for (let number = start; number<= stop; number++){

    if(number > 1){
        isPrime = true

        for(let i = 2; i <number; i++){
            if (number%i == 0){

                isPrime = false
                break
            }
        }
        if(isPrime == true){
            console.log(number)
        }
    }
}


// identify the total number of prime numbers in a given range

// identify the largest prime number in the given range