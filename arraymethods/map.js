//  array >> map,filter,reduce


// we can apply a specific function to each  element in array without using loops
// [1,2,3,4]   [1,4,9,16]

// syntax

// array.map(item,index) =>{
//   return new value
//   }

let numbers = [2,3,4,5,6]

console.log(numbers.map(num => num**2))


// find the square root of each element in the array
// numbers = [4,9,16,25]

let num =[4,9,16,25]
console.log(num.map(n => n**2))

// find the cube of each element in the array
// numbers =[1,2,3,4]

let nums =[1,2,3,4]
console.log(nums.map(nu => nu**3))