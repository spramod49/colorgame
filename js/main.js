var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var	colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easyBtn");
var hardButton = document.getElementById("hardBtn");
var pickedColor = pickColor();


colorDisplay.textContent = pickedColor;


resetButton.addEventListener("click" , function(){
	// generate random colors
	colors = generateRandomColors(numSquares);
	// pick the correct color
	pickedColor = pickColor();
	// Change color display to match new color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	// color the squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New colors"

});


colors.forEach(function(color, i){
	squares[i].style.backgroundColor = color;
	
	squares[i].addEventListener("click", function(){
		
		var clickedColor = this.style.backgroundColor;

		if(pickedColor === clickedColor){
			messageDisplay.textContent = "Correct!"
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
});

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New colors"
	messageDisplay.textContent = "";
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New colors"
	messageDisplay.textContent = "";	
});

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for (var i = 0; i <num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	var color = red+", "+green+", "+blue
	return "rgb(" + color + ")";
}

