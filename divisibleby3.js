// check a number is divisible by either 3 and 5
// divisible by 3 not 5
// divisible by 5 not 3
// not divisible by both 3 and 5

 var num = 23

 if (num % 3 == 0 && num % 5==0){

    console.log(num,"divisible by both 3 and 5")
 }

 else if(num%3 == 0 && num% 5!= 0){
    console.log(num,"divisible by 3 not 5")
 }

 else if(num % 5 == 0 && num % 3!= 0){
    console.log(num,"divisible by 5 not 3")
 }

 else{
    console.log(num,"not divisible by both 3 and 5")
 }

