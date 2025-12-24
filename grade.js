// get the total mark of a subject
// if the marks is greater or equal to 90 ->A
// marks above 80 and less than 90 ->B
// marks above 70 and less than or equal to 80 ->c
// marks above 60 and less than or equal 70 ->D
// else failed


var mark = 65

if (mark >= 90) {
    console.log("Grade A")
}
else if (mark > 80 && mark < 90) {
    console.log("Grade B")
}
else if (mark > 70 && mark <= 80) {
    console.log("Grade C")
}
else if(mark > 60 && mark <= 70){
     console.log("Grade D")
}
else {
    console.log("Fail")
}