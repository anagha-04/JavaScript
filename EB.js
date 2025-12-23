// write a program to find the Electricity bill based on units
// if units <= 100 -> rs 1 per unit
// if 101 - 200 -> rs 2 per unit
// if 200 or above -> rs 3 per unit

var unit = 154

if (unit <= 100){
    result = unit * 1
    console.log(result)
}

else if (unit > 100 && unit < 200){
     result = unit * 2
    console.log(result)
}

else{
    result = unit * 3
    console.log(result)
}