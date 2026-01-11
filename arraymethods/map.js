// //  array >> map,filter,reduce

// // MAP....
// // ===>>>>>


// // we can apply a specific function to each  element in array without using loops
// // [1,2,3,4]   [1,4,9,16]

// // syntax

// // array.map(item,index) =>{
// //   return new value
// //   }

// let numbers = [2,3,4,5,6]

// console.log(numbers.map(num => num**2))


// // find the square root of each element in the array
// // numbers = [4,9,16,25]

// let num =[4,9,16,25]
// console.log(num.map(n => n**0.5))

// // find the cube of each element in the array
// // numbers =[1,2,3,4]

// let nums =[1,2,3,4,5]
// console.log(nums.map(nu => nu **3))

// // FILTER >> method not fn
// // =======

// // return the element from the array which matches a given condition

// // [1,2,3,4,5]    i%2==0

// numbers =[1,2,3,4,5,6]

// console.log(numbers.filter(x => x%2==0))

// // find the odd numbers from the array of numbers

// z = [1,2,3,5,6,7,4,8,9]

// console.log(z.filter(y=>y%2!=0))

// // find the numbers divisible by 3 and 5

// array = [5,15,30,25,10,8]

// console.log(array.filter(t => t%3 == 0 &&  t%5 == 0))


// // REDUCE
// // =======

// n =[5,15,30,25,10,8]

// let total = n.reduce((a,b) => a+b )
// console.log(total)




// question
// =========
// return the product of the even numbers from a array // filter

// find the square of all elements in a array map

// filter the elements which are greater than 20 from the above squared array filter

// find the sum of all elements from the filtered array reduce


numbers =[2,4,3,6,7,9,5,1]

product =1

even = numbers.filter(n => {
     if(n %2 == 0) product *= n
})
console.log(product)

square = numbers.map(m => m * m)

console.log(square)


filtered = square.filter(n => n > 20)

console.log( filtered);


sum = filtered.reduce((a,b) => a + b)

console.log( sum);


