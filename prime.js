//  prime looping,jumbing statement,if condition
// a nuber which is divisible by 1 and the number itself
// num = 7     1,7

//  to alter the flow of the looping like exit from loop, skip the crtain loop : jumbing statements - break,continue


let number = 7
if (number>1){
    isPrime=true
    for(let i = 2; i < number; i++){

       if(number % i == 0){
        isPrime = false
        break
       }
    }
    console.log(isPrime == true?"prime number":"not prime")

}
else{
    console.log("enter a value greater than one")
}