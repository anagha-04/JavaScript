//  while loop (condition based)
// loop used to execute a block of code repeatedly if the condition is true
//  if the condition is false the loop never runs


// syntax:

// initialization
// while(condition){
   // code
   // increment/decrement
// }

// print the number from 1 to 7

// let i = 1;
// while(i<=7){
//     console.log(i)

//     i++;
// }

//  even numbers
let i = 30;

while(i<=30){
    if(i%2==0){
        console.log(i)
    }
    i++;
    
}

// print the numbers divisible by both 3 and 5 from 13 to 105

let num = 13;

while (num <= 105) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log(num);
    }
    num++;
}