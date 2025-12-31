// move all zeros from the array to the end

// numbers = [1,0,4,5,7,0,3,0]      //output = [1,4,5,7,3,0,0,0]

// let result =[]

// for(let i = 0 ; i<numbers.length; i++){

//     if(numbers[i]!= 0){

//         result.push(numbers[i])
//     }
// }

// while(result.length < numbers.length){

//     result.push(0)
// }

// console.log(result)




// even count odd count and sum
// create a new array which contains only the unique elements from the array

let numbers = [12, 5, 8, 20, 7, 15, 8, 20]

let even = 0

let odd = 0

let sum = 0

let unique =[]


for (let i = 0; i < numbers.length; i++) {

    sum = sum + numbers[i];

    if (numbers[i] % 2 == 0) {

        even++;

    } else {

        odd++;
    }
    if(!unique.includes(numbers[i])){

        unique.push(numbers[i])
    }
}

console.log("Even count:", even);

console.log("Odd count:", odd);

console.log("Sum:", sum);

console.log("unique:", unique)
