document.querySelector("#single").addEventListener("click", singlePlayer);
document.querySelector("#multi").addEventListener("click", multiPlayer);

var singleInput = document.getElementById('singleBox').querySelector('input');
var multiInput = document.getElementById('multiBox').querySelectorAll('input');
var playButton = 	document.querySelector('#play');
var resetButton = document.querySelector("#reset");
var resetButton = document.querySelector("#reset");
var newGameButton = document.querySelector("#newGame");
var squares = document.querySelectorAll("td");
var numPlayers;

var moveCounter = 1;

function singlePlayer(){
	alert("Opcja w trakcie rozwoju");
	// if (multiInput[0].disabled == false) {
	// 	alert('Wybrano rodzaj rozgrywki Multi-player')
	// }else{
	//  numPlayers = 1;
	// 	singleInput.disabled = false;
	// 	playButton.disabled = false;
	// 	playButton.addEventListener("click", prepareGame;
	// }
}

function multiPlayer(){
	if (singleInput.disabled == false) {
		alert('Wybrano rodzaj rozgrywki Single-player')
	} else {
		numPlayers = 2;
		for (var i = 0; i < multiInput.length; i++) {
			multiInput[i].disabled = false;
		}
		playButton.disabled = false;
		playButton.addEventListener("click", prepareGame);
	}
}

function prepareGame(){
	playButton.disabled = true;
	resetButton.disabled = false;
	newGameButton.disabled = false;
	resetButton.addEventListener("click", wyczysc);
	newGameButton.addEventListener("click", nowaGra);
	if (numPlayers == 1) {
		document.querySelector("#firstPlayer").textContent = multiInput[0].value;
		document.querySelector("#secondPlayer").textContent = "Computer";
	} else {
		document.querySelector("#firstPlayer").textContent = multiInput[0].value + " (X)";
		document.querySelector("#secondPlayer").textContent = multiInput[1].value + " (O)";
	}
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", putMark);
	}
}

function putMark(){
	if (numPlayers == 1) {
		alert("Opcja single-player nie jest jeszcze rozwinięta");
	} else {
		if (this.innerHTML == "") {
			if ((moveCounter % 2) != 0) {
				this.innerHTML = "X"
				console.log(this.id);
			} else {
				this.innerHTML = "O"
				console.log(this.id);
			}
			moveCounter += 1
		} else {
			alert("Nie możesz tutaj postawić znaku");
		}
	}
	if (moveCounter == 10) {
		alert("Koniec gry");
	}
}

function nowaGra(){
	moveCounter = 1;
	wyczysc();
	for (var i = 0; i < squares.length; i++) {
		squares[i].removeEventListener("click", putMark);
	};
	playButton.disabled = true;
	resetButton.disabled = true;
	newGameButton.disabled = true;
	for (var i = 0; i < multiInput.length; i++) {
		multiInput[i].disabled = true;
	}
	document.querySelector("#firstPlayer").textContent = "First player";
	document.querySelector("#secondPlayer").textContent = "Second Player";
	// singleInput.disabled = true;
}

function wyczysc(){
	var x = document.querySelectorAll('td').length;
	for (var i = 0; i < x; i++) {
		document.querySelectorAll('td')[i].textContent = "";
	}
	moveCounter = 1;
}
