var numSquares = 6;
//Defining colors array
var colors = generateRandomColors(numSquares);

//To select all the squares
var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    //To match pickedColor with color in the array=colors
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //Changing the color of squares 
    for(i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    //To match pickedColor with color in the array=colors
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //Changing the color of squares 
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //Generate all new colors
    colors = generateRandomColors(numSquares);
    //Pick a random new color from array
    pickedColor = pickColor();
    //Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";

    //Defining an empty string so that no message appears on refreshing the page
    messageDisplay.textContent = "" ;
    //Change color of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#29AB87";
});

colorDisplay.textContent = pickedColor;

//Looping through each square
for(var i = 0; i < squares.length; i++) {
    //Add initial color to squares
    squares[i].style.backgroundColor = colors[i];

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