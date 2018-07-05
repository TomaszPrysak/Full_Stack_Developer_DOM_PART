function putText1(){
	// obj.previousElementSibling.innerHTML = "Patataj!";
	var idP = document.getElementById('p1');
	idP.innerHTML = "Patataj!";
}

function putText2(){
	var allP = document.getElementsByTagName('p');
	allP[3].innerHTML = "Cwanie co nie ;)";
}

function putText3(){
	var classP = document.getElementsByClassName('para');
	classP[1].innerHTML = "Tego się nie spodziewałeś. Przyznaj !";
}

function putText4(){
	var pSelector = document.querySelectorAll('p');
	pSelector[7].innerHTML = "Magia !";
}

function putText5(){
	var pTitle = document.getElementById('title');
	pTitle.innerHTML = document.title;
}

function changeText1(){
	var pChange = document.getElementById('demo');
	pChange.innerHTML = "Buahahaha!";
}

function changeText2(){
	var h3Cahnge = document.getElementById('myHeader');
	h3Cahnge.innerHTML = "POLSKA DAWAJ!";
}

function changeIMG1(){
	var imgChange = document.getElementById('img');
	imgChange.src = "pic_mountain.jpg";
}

function changeValue1(){
	var inputValue = document.getElementById('myText1');
	inputValue.value = "Spadaj Pan!";
}

function fromInput(){
	var inputValue = document.getElementById('myText2').value;
	var para = document.getElementById('p2');
	para.innerHTML = inputValue;
}

// function pomijajacHTML(){
// 	document.write('test');
// }

function colorTextChange(){
	var paraToChangeColorText = document.getElementById('p3');
	paraToChangeColorText.style.color = "red";
}

function colorBackgroundChange(){
	var paraToChangeColorBackground = document.getElementById('p4');
	paraToChangeColorBackground.style.backgroundColor = "yellow";
}

function textCenterAlign(){
	var paraTextCenterAlign = document.getElementById('p5');
	paraTextCenterAlign.style.textAlign = "center";
}

function fontResize(){
	var paraResize = document.getElementById('p6');
	paraResize.style.fontSize = "25px";
}

function visibilityPara(){
	var paraHidden = document.getElementById('p7');
	paraHidden.style.visibility = "hidden";
}

function animationStart(){
	var boxP = document.getElementById("plate");
	var boxS = document.getElementById("square");
	var position = 0;
	var id = setInterval(animation,5);
	function animation(){
		if (position == 350) {
			clearInterval(id);
		} else {
			position++;
			r1 = Math.floor(Math.random()*255);
			g1 = Math.floor(Math.random()*255);
			b1 = Math.floor(Math.random()*255);
			boxP.style.backgroundColor = "rgb("+r1+", "+g1+", "+b1+")";
			r2 = Math.floor(Math.random()*255);
			g2 = Math.floor(Math.random()*255);
			b2 = Math.floor(Math.random()*255);
			boxS.style.backgroundColor = "rgb("+r2+", "+g2+", "+b2+")";
			boxS.style.top = position + "px";
			boxS.style.left = position + "px";
		}
	}
}

function watchStart(){
	setTimeout(watchStart1, 3000);
	function watchStart1(){
		setInterval(watchStart2,1000);
		function watchStart2(){
			var time = new Date();
			var timeHuman = time.toLocaleTimeString();
			document.getElementById("zegarek").innerHTML = timeHuman;
		}
	}
}

function boxMouseOver(element){
	element.style.backgroundColor = "green";
	element.innerHTML = "CZERWONY!!!"
}

function boxMouseOut(element){
 element.style.backgroundColor = "red";
 element.innerHTML = "ZIELONY!!!"
}

// Inny sposób na rozwiązanie przykładu z żarówką
// function imgMouseDowne(element){
// 	element.src = "bulbon.gif";
// }
//
// function imgMouseUp(element){
// 	element.src = "bulboff.gif";
// }

function changeTextToUpper(){
	var inputBox = document.getElementById('myText3');
	inputBox.value = inputBox.value.toUpperCase();
}

document.getElementById('p8').onmouseover = displayDate;
document.getElementById('p8').onmouseout = function(){displayText()};

function displayDate(){
	document.getElementById('p8').innerHTML = Date();
}

function displayText(){
	document.getElementById('p8').innerHTML = "Jestem datą ! :P nie wierzysz... najedź na mnie";
}

document.getElementById('eventListener1').addEventListener("click", showAlert);

function showAlert(){
	alert("Jestem pusty w środku ;(");
}

// Poniższa metoda pozwala na umieszczenie kodu wywoływanego podczas zdarzenia od razu w konstrukcji nasłuchiwacza zdarzeń
// document.getElementById('eventListener1').addEventListener("click", function(){alert("Jestem pusty w środku ;(");});

document.getElementById('eventListener2').addEventListener("mouseover", addTextOver);
document.getElementById('eventListener2').addEventListener("mouseout", addTextOut);
document.getElementById('eventListener2').addEventListener("click", function(){alert("I co Pan mi zrobisz :P:P:P");});
document.getElementById('eventListener2').addEventListener("click", function(){document.getElementById('d1').innerHTML += "ałaaa ! Nie naciskaj mnie !<br>"});

function addTextOver(){
	var para = document.getElementById('d1');
	para.innerHTML += "Zejdź ze mnie ! Jestem wariat<br>";
}

function addTextOut(){
	var para = document.getElementById('d1');
	para.innerHTML += "Masz szczęście ! Jestem wariat<br>";
}

var inputToCount1 = document.getElementById('input1');
inputToCount1.addEventListener("focus", function(){this.value='';});
inputToCount1.addEventListener("focus", function(){this.style.backgroundColor = 'yellow';});
inputToCount1.addEventListener("focusout", function(){checkIfNumeric(this);});

var inputToCount2 = document.getElementById('input2');
inputToCount2.addEventListener("focus", function(){this.value='';});
inputToCount2.addEventListener("focus", function(){this.style.backgroundColor = 'yellow';});
inputToCount2.addEventListener("focusout", function(){checkIfNumeric(this);});

function checkIfNumeric(element){
	if (element.value == "") {
		alert("Pole nie może być puste. Wprowadź wartość.")
		element.value='??';
		element.style.backgroundColor='white';
	}else{
		if (!isNaN(element.value)){
			element.style.backgroundColor='white';
		}else{
			alert("Wprowadzona wartość nie jest wartościa numeryczną. Wprowadź wartość ponowwnie.")
			element.value='??';
			element.style.backgroundColor='white';
		}
	}
}

document.getElementById('eventListener3').addEventListener("click", function(){dodawanie(inputToCount1.value, inputToCount2.value);});

function dodawanie(x,y){
	if (x == "??" || y == "??") {
		alert("Nie wprowdzono wszystkich wartości.")
	}else{
		var result = parseInt(x) + parseInt(y);
		document.getElementById("d2").innerHTML = result;
	}
}

document.getElementById('eventListener4').addEventListener("click", function(){odejmowanie(inputToCount1.value, inputToCount2.value);});

function odejmowanie(x,y){
	if (x == "??" || y == "??") {
		alert("Nie wprowdzono wszystkich wartości.")
	}else{
		var result = parseInt(x) - parseInt(y);
		document.getElementById("d2").innerHTML = result;
	}
}

document.getElementById('eventListener5').addEventListener("click", function(){mnozenie(inputToCount1.value, inputToCount2.value);});

function mnozenie(x,y){
	if (x == "??" || y == "??") {
		alert("Nie wprowdzono wszystkich wartości.")
	}else{
		var result = parseInt(x) * parseInt(y);
		document.getElementById("d2").innerHTML = result;
	}
}

document.getElementById('eventListener6').addEventListener("click", function(){dzielenie(inputToCount1.value, inputToCount2.value);});

function dzielenie(x,y){
	if (x == "??" || y == "??") {
		alert("Nie wprowdzono wszystkich wartości.")
	}else if (y == 0) {
		alert("Ty debilu ! Nie można dzielić przez zero !!!")
	}else{
		var result = parseInt(x) / parseInt(y);
		document.getElementById("d2").innerHTML = result;
	}
}

document.getElementById('eventListener7').addEventListener("click", ce);

function ce(){
	inputToCount1.value = "??";
	inputToCount2.value = "??";
	document.getElementById('d2').innerHTML = "";
}

document.getElementById("boxPropagacja1").addEventListener("click", function(){alert("Kliknąłeś w pomarańczkę");}, false);
document.getElementById("akapitPropagacja1").addEventListener("click", function(){alert("Kliknałeś w białeczko");}, false);

document.getElementById("boxPropagacja2").addEventListener("click", function(){alert("Kliknąłeś w pomarańczkę");}, true);
document.getElementById("akapitPropagacja2").addEventListener("click", function(){alert("Kliknałeś w białeczko");}, true);


function node1(){
	var parent = document.getElementById("li1").parentNode.id;
	document.getElementById('p9').innerHTML = parent;
}

function node2(){
	var node = document.getElementsByTagName("ol")[0].childNodes[9].innerHTML;
	document.getElementById('p10').innerHTML = node;
}

function node3(){
	var node = document.getElementById("list1").firstElementChild.innerHTML;
	document.getElementById('p11').innerHTML = node;
}

function node4(){
	var node = document.getElementById("list1").lastElementChild.innerHTML;
	document.getElementById('p12').innerHTML = node;
}

function node5(){
	var ducati = document.getElementById('li3').nextElementSibling.innerHTML;
	document.getElementById('p13').innerHTML = ducati;
}

function node6(){
	var harley = document.getElementById('li3').previousElementSibling.innerHTML;
	document.getElementById('p14').innerHTML = harley;
}

function node7(){
	var tagName = document.getElementById("list1").nodeName;
	document.getElementById("p15").innerHTML = tagName;
}

function node8(){
	var node = document.getElementsByTagName("ol")[0].nodeType;
	document.getElementById("p16").innerHTML = node;
}

function node9(){
	var node = document.getElementById("li4").childNodes[0].nodeType;
	document.getElementById("p17").innerHTML = node;
}

function addP(){
	var nowyAkapit = document.createElement('p');
	var trescNowegoAkapitu = document.createTextNode('Jestem nowym stworzeniem :D');
	nowyAkapit.appendChild(trescNowegoAkapitu);
	var rodzicDoKtóregoDodamyNowyAkapit = document.getElementById('nodeTest');
	rodzicDoKtóregoDodamyNowyAkapit.appendChild(nowyAkapit);

	var idNowegoAkapitu = document.createAttribute('id');
	idNowegoAkapitu.value = "p18";
	nowyAkapit.setAttributeNode(idNowegoAkapitu);

	document.getElementById("addButton1").disabled = true;
}

function addPbyRandom(){
	var number;
	do {
		number = Math.floor(Math.random()*19);
	} while (number == 0);

	var paraNumber = "p" + number;

	var nowyAkapit = document.createElement('p');
	var trescNowegoAkapitu = document.createTextNode('YEAHHHH JESTEM ŚWIREM ! :D');
	nowyAkapit.appendChild(trescNowegoAkapitu);
	var idNowegoAkapitu = document.createAttribute('id');
	idNowegoAkapitu.value = "swirus";
	nowyAkapit.setAttributeNode(idNowegoAkapitu);

	var rodzicDoKtoregoDodamyNowyAkapit = document.body;
	var elemetPrzedKtoryDodamyNowyAkapit = document.getElementById(paraNumber);

	rodzicDoKtoregoDodamyNowyAkapit.insertBefore(nowyAkapit, elemetPrzedKtoryDodamyNowyAkapit);

	console.log(paraNumber);

	alert("Gdzieś na stronie pojawił się świrusek ;)");
}

function removeButtonbyRandom(){
	var listButton = document.getElementsByTagName('button');
	var number;
	var currentButton;
	do {
		number = Math.floor(Math.random()*(listButton.length));
		currentButton = document.getElementsByTagName('button')[number];
	} while (currentButton.id === "mnienie1" || currentButton.parentNode.nodeName == "P");

	var rodzicZKtoregoUsuniemyPrzysisk = document.body;
	var usuwanyPrzycisk = document.getElementsByTagName('button');
	//
	console.log(listButton);
	console.log(number);
	console.log(usuwanyPrzycisk[number].innerHTML);

	rodzicZKtoregoUsuniemyPrzysisk.removeChild(usuwanyPrzycisk[number]);

	alert("Usunięty został jakiś przycisk :P");
}

function replaceButtonbyRandom(){
	var listButton = document.getElementsByTagName('button');
	var number;
	var currentButton;
	do {
		number = Math.floor(Math.random()*(listButton.length));
		currentButton = document.getElementsByTagName('button')[number];
	} while (currentButton.id === "mnienie2" || currentButton.parentNode.nodeName == "P");

	var nowyAkapit = document.createElement('p');
	var trescNowegoAkapitu = document.createTextNode('Ojojojoj a gdzie sie podział przycisk :O ????');
	nowyAkapit.appendChild(trescNowegoAkapitu);
	var idNowegoAkapitu = document.createAttribute('id');
	idNowegoAkapitu.value = "podmieniany";
	nowyAkapit.setAttributeNode(idNowegoAkapitu);

	var rodzicWKtorymZamienimyPrzycisk = document.body;
	var zamienianyPrzycisk = document.getElementsByTagName('button');

	console.log(listButton);
	console.log(number);
	console.log(zamienianyPrzycisk[number].innerHTML);

	rodzicWKtorymZamienimyPrzycisk.replaceChild(nowyAkapit, zamienianyPrzycisk[number]);
}
