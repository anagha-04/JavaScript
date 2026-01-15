let secretNum = Math.floor(Math.random()*20) + 1
let score = 20
let highest = 0

function check(){

    let guess = document.querySelector("#number").value

    if (guess == secretNum){

        document.querySelector("#secret").innerText = guess
    }
    else if (guess == ""){
        document.querySelector("#secret").innerText ="No Number"
    }

}