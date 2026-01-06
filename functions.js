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