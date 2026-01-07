let num1 = 10

let num2 = 20

console.log(num1+num2)

//  function

// export import
// reusable
// dynamic values 

// function  functionname(param1,param2){  ----> function header

//       function body         ----> fn body

// }
// functioname()         ----->function caller


function greet(){

    console.log("hello everyone")
}

greet()

//  function wit arameter
// parameter is a variable which accepts a value when the function is called

function addNum(num1,num2){

    sum = num1+num2

    console.log(sum)

}

addNum(num1 = 10, num2 = 20)  // actual values for parameters passed during function call 
addNum(num1 = 3, num2 = 2)


//  function with return value

function addNum(num1 , num2){


    sum = num1+num2

    return sum  //which returns a specific value (outside) where  the function is called

}

let result = addNum(10,20)

console.log(result)


//  define a function to check the largest among the three numbers


function largestNum(num1,num2,num3){

    if (num1>num2 && num1>num3){

        console.log(num1)
    }
    else if(num2>num1 && num2>num3){

        console.log(num2)
    }
    else{
        console.log(num3)
    }

}

largestNum(96,66,6)




//  define a fun which accpts two values
// return true if 2 nmbers are even
// return false if any of them is even


function evennum(a,b){

    if(a%2==0 && b%2==0){
        return true
    }
    else{
        return false
    }
}
console.log(evennum(2,4))

console.log(evennum(2,5))



// define a fn named apiresponse which accepts the status value
// if status value equals 200 return "success"
// if status value equals to 404 return "page not found"
// if status value equals to 500 return "server error"
// if any other value  return "server crashed"



function apiresponse(status){

    if(status == 200){
        return "success"
    }
    else if(status==404){
        return "page not found"
    }
    else if(status==500){
        return "server error"
    }
    else{
        return "server crashed"
    }
}
console.log(apiresponse(200))
console.log(apiresponse(404))
console.log(apiresponse(500))
console.log(apiresponse(300))


// callback function

// a function(B) is passed as an argument for a main function(A) in  which A will be executed later

function Greet(callback){

    callback()
}

function sayHello(){

    console.log("hello")
}
Greet(sayHello)


// define a function to check a given number is prime or not

function prime(num){

    if(num<=1){
        return "not prime"
    }
    for(let i = 2;i<num;i++){
        if(num%i == 0){
            return "not prime"
        }
    }
    return "prime"
}
console.log(prime(7))


// callback function using parameters
// execution of one function is depend on another
// result is not available immediately
// used for asynchrous function

function manifunction(callback,num1,num2){

    callback(num1,num2)
}
function addNums(num1,num2){

    sum = num1+num2
    console.log(sum)

}

manifunction(addNums,10,20)


// Arrow function

// shorter way to write the function in js


// function details(name,age){

//     console.log(name)
//     console.log(age)
// }


// const details =(name,age)=>{
//     console.log(name)
//     console.log(age)
// }


// add two numbers
// ===============


const adds = (a,b)=> a+b

console.log(adds(10,56))

// find the square of a given number

const square= (a)=>a**2

console.log(square(3))


// check a number is even or odd


const checkEvenOdd=(num)=>(num%2==0? "Even":"odd")
console.log(checkEvenOdd(4))

// check largest among two numbers

const lagest=(a,b)=>(a>b ? a:b)
console.log(lagest(2,3))


// fetch()

// to fetch the data from a server json

// fetch(url)

// function sends a request to the url



// create a function to return the sum of digits of a given number
// 123

function sumDigits(num1){

    sum = 0
    while(num1 > 0){

        lastDigit = num1 %10
        sum +=lastDigit
        num1 = Math.floor(num1/10)
    }
    return sum
}
console.log(sumDigits(123))