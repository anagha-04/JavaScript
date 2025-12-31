// find the largest element in the array

numbers = [3,8,4,9,78,2,56,96]

largest =numbers[0]

for(let i = 0 ; i < numbers.length; i++){

    if(numbers[i]> largest){

        largest = numbers[i]
    }
}

console.log(largest)

// find the smallest element in the above array


num = [3,8,4,9,78,2,56,96]

smallest =num[0]

for(let i = 0 ; i < num.length; i++){

    if(numbers[i]< smallest){

        smallest = num[i]
    }
}

console.log(smallest)