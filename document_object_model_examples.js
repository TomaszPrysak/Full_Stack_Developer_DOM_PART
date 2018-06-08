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
