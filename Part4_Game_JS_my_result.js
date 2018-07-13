document.querySelector("#single").addEventListener("click", singlePlayer);
document.querySelector("#multi").addEventListener("click", multiPlayer);

var singleInput = document.getElementById('singleBox').querySelector('input');
var multiInput = document.getElementById('multiBox').querySelectorAll('input');
var playButton = 	document.querySelector('#play');
var resetButton = document.querySelector("#reset");
var resetButton = document.querySelector("#reset");
var newGameButton = document.querySelector("#newGame");
var squares = document.querySelectorAll("td");

function singlePlayer(){
	if (multiInput[0].disabled == false) {
		alert('Wybrano rodzaj rozgrywki Multi-player')
	}else{
		singleInput.disabled = false;
		playButton.disabled = false;
		playButton.addEventListener("click", function(){prepareGame(1);});
	}
}

function multiPlayer(){
	if (singleInput.disabled == false) {
		alert('Wybrano rodzaj rozgrywki Single-player')
	} else {
		for (var i = 0; i < multiInput.length; i++) {
			multiInput[i].disabled = false;
		}
		playButton.disabled = false;
		playButton.addEventListener("click", function(){prepareGame(2);});
	}
}

function prepareGame(numPlayers){
	playButton.disabled = true;
	resetButton.disabled = false;
	newGameButton.disabled = false;
	resetButton.addEventListener("click", wyczysc);
	newGameButton.addEventListener("click", nowaGra);
	if (numPlayers == 1) {
		document.querySelector("#firstPlayer").textContent = multiInput[0].value;
		document.querySelector("#secondPlayer").textContent = "Computer";
	} else {
		document.querySelector("#firstPlayer").textContent = multiInput[0].value;
		document.querySelector("#secondPlayer").textContent = multiInput[1].value;
	}
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click",putMark);
	}
}

function putMark(){
	this.innerHTML = "X";
}

function nowaGra(){
	console.log("Działa");
}

function wyczysc(){
	var x = document.querySelectorAll('td').length;
	for (var i = 0; i < x; i++) {
		document.querySelectorAll('td')[i].textContent = "";
	}
}
