// a=10 name ="hello"

// variable keyword

//var let const

var name ="python" // if we did mention anything default (var)

name ="django"

console.log(name)    // (print) >> value assigined in a variable can be changed


// let subject ="datascience"  // iteration 

// subject = "django"

// console.log(subject)  // value assigined in a variable can be changed


// const age = 26   //fun

// age = 30

// console.log(age)

//  PRIMITIVE DATATYPES

// 1) Number
// 2) string
// 3) bigint
// 4) boolean
// 5) null
// 6) undefined

// NULL

var price = 500

var price = null

console.log(price)

// UNDEFINED

var object;

console.log(typeof object)



// NON-PRIMITIVE DATATYPES

// 1) array
// 2) object


// OPERATORS
//============


//ARITHMETIC OPERATORS

//   + , - , * , / , %reminder , **exponential , ++ increment , -- decrement


num1 = 10
num2 = 20

//console.log(num1+num2)

// increment

num1 = 5
console.log(num1 ++) // first it change the value >> output=5
console.log(num1) // then it incremented value  (post increment) >> output=6

num2 = 7
console.log(++num2) // pre increment



// decrement

num1 = 10
console.log(num1--)  // post-decrement
console.log(num1)

// COMPARISON OPERATORS

// < , > , <= ,>= , == , ===(strictly equal to)

// a==b  it checks both values are same or not

a = 5 

console.log(a==="5")  // value and dataype 



// LOGICAL OPERATORS
// ==================

// and >>  a && b   >> return true if a and b are true
// or >> ||   a||b >> return true if either a or b are true
// not >> !  a!b >>  return invese of a and b accordingly


// ternary operator   (?:)
// =================

age  = 20

//  condition?true:false

let result =  age > 18 ?"eligible":"not eligible"

console.log(result)


// arithmetic , coparison ,logical, ternary ,assignment(= ,+= ,-=,.....)



// CONDITIONAL STATEMENTS


var age = 10;

if (age > 18){
    console.log("eligible")
}

else{
    console.log("not eligible")
}




var age = 20;

if (age<18){
    console.log("not"
    )
}

else if(age === 18){
    console.log("okay")

}

else{
    console.log("eligible")

}

