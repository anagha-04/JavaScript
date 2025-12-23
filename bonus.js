//  write a program to calculate the bonus

// salary above or equal to 50k -->10%
// salary above or equal to 30k -->7%
// other wiae -->5%

// get the salary and calculate the bonus and print the total

var salary = 25000

if ( salary>50000){
    console.log(salary+(salary*10/100))
}
else if (salary>=30000){
    console.log(salary+(salary*7/100))
}
else {
   console.log(salary+(salary*5/100))
}

