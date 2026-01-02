// add odd num to a set 

num = [5,6,1,3,8,9,4]

odd = new Set()

for(i=0;i<num.length;i++){

    if(num[i]%2!=0){

        odd.add(num[i])
    }
}
console.log(odd) 

text = "js is easy and js is powerful"

// find the unique words from the text given and add them to a array
result =[]

unique = new Set(text.split(" "))

for(i of unique){      // here not picking elements using index .taking elements direct

    result.push(i)

}

console.log(result)


// objects and map

// object -> map(modern application,api fetch)



let student = {

    name : "Rahul",
    age : 32,
    course:"js"
}


// objects are key value collections
//  key string
//  order is not guaranted
// console.log(student(object name).name(key)    output: Rahul


//  map

let elements = new Map()

// Map doest not convert keys to the strings
// Add or update key value pair in map : set()

// set(Key,value)

elements.set("name","anagha")
console.log(elements)
//  keys can be of  dataype