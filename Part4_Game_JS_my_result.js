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

// Poniżej tabele zawierające możliwości wygranej
var row1 = [1,2,3];
var row2 = [4,5,6];
var row3 = [7,8,9];
var col1 = [1,4,7];
var col2 = [2,5,8];
var col3 = [3,6,9];
var across1 = [1, 5, 9];
var across2 = [3, 5, 7];

var rowColArray = [row1, row2, row3, col1, col2, col3, across1, across2];

// Prosty sposób w JavaScript na sprawdzenie czy wartośc znajduje się w tabeli:
// if (row3.indexOf(7) == "-1") {
// 	console.log("nie ma w tabeli");
// }else{
// 	console.log(row1.indexOf(1));
// }

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
			} else {
				this.innerHTML = "O"
			}
			moveCounter += 1
			if (moveCounter > 5) {
					if (checkWinner(this.innerHTML, this.id) == this.innerHTML) {
						alert("wygrana " + this.innerHTML + "\nPo kliknięciu OK rozpocznie się nowa runda\nAby zagrać nowymi postaciami wybierz NEW GAME");
						wyczysc();
					}
				}
			// 	}
			// setTimeout(function(){showWin()}, 3000);
			// function showWin(x){
			// 	if (moveCounter > 5) {
			// 		if (checkWinner(this.innerHTML, this.id) == this.innerHTML) {
			// 			alert("wygrana " + this.innerHTML);
			// 			wyczysc();
			// 		}
			// 	}
			// }
		} else {
			alert("Nie możesz tutaj postawić znaku");
		}
	}
	if (moveCounter == 10) {
		alert("Remis\nPo kliknięciu OK rozpocznie się nowa runda\nAby zagrać nowymi postaciami wybierz NEW GAME");
		wyczysc();
	}
}

function checkWinner(mark, id){
	var intID = parseInt(id)
	for (variable1 of rowColArray) {
		if (variable1.indexOf(intID) != "-1") {
			var markCounter = 0;
			for (variable2 of variable1) {
				if (document.getElementById(variable2).innerHTML == mark) {
					markCounter += 1;
				}
				if (markCounter == 3) {
					return mark;
				}
			}
		}
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
	multiInput[0].value = "Player One";
	document.querySelector("#secondPlayer").textContent = "Second Player";
	multiInput[1].value = "Player Two";
	// singleInput.disabled = true;
}

function wyczysc(){
	var x = document.querySelectorAll('td').length;
	for (var i = 0; i < x; i++) {
		document.querySelectorAll('td')[i].textContent = "";
	}
	moveCounter = 1;
}
