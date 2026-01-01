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