
year = 2001

if (year % 100 == 0 && year % 400 == 0){
    console.log(year,"is leap year and century")
}
else if (year % 100 !=0 && year % 4 == 0){
    console.log(year,"is leap year and non century")
}

else{
    console.log(year,"not a leap year")
}