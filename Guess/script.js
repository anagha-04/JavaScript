let secretNum = Math.floor(Math.random()*20) + 1
let score = 20
let highest = 0

function check(){

    let guess = document.querySelector("#number").value

    if (guess == secretNum){
        document.querySelector("#secret").innerText = guess
        
      if(score >highest){
        highest = score
        document.querySelector("#highest").innerText=highest
      }

    }
    else if (guess == ""){
        document.querySelector("#secret").innerText ="No Number"
    }
    if (guess<secretNum){

        if(score>1){
            score--
        }
    }

}

if (guess == secretNum) {
        document.querySelector("#secret").innerHTML = guess
        document.querySelector("#msg").innerHTML = "Correct Number!";
    } else if (guess == "") {
        document.querySelector("#secret").innerHTML = "no number"
    }

    else {
        document.querySelector("#msg").innerHTML =
            guess > secretNum ? "Too High!" : "Too Low!";
        score--;
        document.querySelector("#score").innerHTML = score;
    }