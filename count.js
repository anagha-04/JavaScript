// count how many numbers are divisible by 3 in 1 and 50
// let count = 0

// for(i=1; i <=50 ; i++){

//     if(i%3==0){

//         count +=1
//     }

// }
// console.log(count)

// count the total number of character in the string

let text = "javascript"     // index always start from 0.... 

let count =0 

for (i = 0;i<text.length;i++){

    count +=1
}

console.log(count)



// return the count of a specific character from a string

let char ="mississippi"

let target="s"

let counts = 0

for(i=0;i<char.length;i++){

    if (char[i]==target){
        counts++
    }
}

console.log(counts)

// print the elements at the even index position

