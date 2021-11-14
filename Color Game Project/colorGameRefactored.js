//DESIGN PATTERNS: Design patterns are the ways of structuring our code. The simplest one is MODULE DESIGN PATTERN, using this design pattern we can add a bunch of properties into objects.
var numSquares = 6;
var colors = [];
var pickedColor;

//Defining colors array
//var colors = generateRandomColors(numSquares);

//To select all the squares
var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelector(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    //To again generate colors
    reset();
}

function setupModeButtons(){
    //Mode buttons event listeners:
    //Infuture if we ahve to add a medium, normal or super hard difficulty mode, we dont have to add extra listeners because we are selecting all of them and then looping them.
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
            // if(this.textContent === "Easy"){
            //     numSquares = 3;
            // }
            // else{
            //     numSquares = 6;
            // }
            reset();
        });
    }
}

function setupSquares(){
    //Looping through each square
for(var i = 0; i < squares.length; i++) {
    //Add initial color to squares
    //squares[i].style.backgroundColor = colors[i];

    //Add click listeners to squares
    squares[i].addEventListener("click", function(){
        //Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //Compare to the picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "CORRECT ;)";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again :(";
        }
    });
}
}

function reset(){
    colors = generateRandomColors(numSquares);
    //Pick a random new color from array
    pickedColor = pickColor();
    //Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    //Defining an empty string so that no message appears on refreshing the page
    messageDisplay.textContent = "" ;
    //Change color of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "#29AB87";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     //To match pickedColor with color in the array=colors
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     //Changing the color of squares 
//     for(i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     //To match pickedColor with color in the array=colors
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     //Changing the color of squares 
//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function(){
    reset();

    // //Generate all new colors
    // colors = generateRandomColors(numSquares);
    // //Pick a random new color from array
    // pickedColor = pickColor();
    // //Change colorDisplay to match picked color
    // colorDisplay.textContent = pickedColor;
    // this.textContent = "New Colors";

    // //Defining an empty string so that no message appears on refreshing the page
    // messageDisplay.textContent = "" ;
    // //Change color of squares
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "#29AB87";
});

//colorDisplay.textContent = pickedColor; 

function changeColors(color){
    //Loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    
}

//Function to pick a random color from the array
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //Make an array
    var arr = [];
    //Repeat num times
    for(var i=0; i < num; i++){
        //Get random color and push into arr
        arr.push(randomColor());
    }
    //Return array
    return arr;
}

function randomColor(){
    //Pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //Pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //Pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}