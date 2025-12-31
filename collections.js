
// collections
// ===========


// to assign more than one value (in different dataype) in a single variable


//  array  : ordered,indexed,allow duplications

let elements = [100,"hello",true]

console.log(elements[1])   //return the item in index position

elements.push(false)

console.log(elements)

elements.pop(elements)

console.log(elements.toReversed())


// find the even numbers from a given range and display them in a array


let start = 3

let stop = 20

let evenNums = []

for(let i = start; i<=stop; i++){

    if(i %2 == 0){
        evenNums.push(i)
    }
}
console.log(evenNums)