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

function boxMouseOver(element){
	element.style.backgroundColor = "green";
	element.innerHTML = "CZERWONY!!!"
}

function boxMouseOut(element){
 element.style.backgroundColor = "red";
 element.innerHTML = "ZIELONY!!!"
}

// function imgMouseDowne(element){
// 	element.src = "bulbon.gif";
// }
//
// function imgMouseUp(element){
// 	element.src = "bulboff.gif";
// }
