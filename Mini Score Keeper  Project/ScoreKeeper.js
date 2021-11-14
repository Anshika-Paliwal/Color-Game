var button_p1 = document.querySelector("#p1");
var button_p2 = document.getElementById("p2");
var reset_button = document.querySelector("#reset");
var display_off_p1 = document.getElementById("display_off_p1");
var display_off_p2 = document.getElementById("display_off_p2");
var numInput = document.querySelector("input[type='number']");//document.querySelector("number");
var winningScoreDisplay = document.querySelector("p span");
var score_p1 = 0;
var score_p2 = 0;
var gameOver = false;
var winningScore = 5;

//Code for Player1
button_p1.addEventListener("click", function(){
    if(!gameOver){
    score_p1++;
        if(score_p1 === winningScore){
            display_off_p1.classList.add("winner");
            gameOver = true;
        }
        display_off_p1.textContent = score_p1;
    }
});

//Code for Player2
button_p2.addEventListener("click", function(){
    if(!gameOver){
    score_p2++;
        if(score_p2 === winningScore){
            display_off_p2.classList.add("winner");
            gameOver = true;
        }
        display_off_p2.textContent = score_p2;
    }
});

//Code for reset button
reset_button.addEventListener("click", function(){
    reset();
});

function reset(){
    score_p1 = 0;
    score_p2 = 0;
    display_off_p1.textContent = 0;
    display_off_p2.textContent = 0;
    display_off_p1.classList.remove("winner");
    display_off_p2.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;//this.nalue
    winningScore = Number(numInput.value);//this.value
    reset();
});