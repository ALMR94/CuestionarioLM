var menuAct="info";
var menuAnt;

//al cargar por completo la página...
window.onload = function(){

	//Seleccion del menu
	document.getElementById("info").onclick = function(){
		borrarTodo();
		mostrarInfo();
	}
	document.getElementById("sn").onclick = function(){
		borrarTodo();
		mostrarSN();
	}
	document.getElementById("quest").onclick = function(){
		borrarTodo();
		mostrarQuest();
	}

}

// Navegar por el menú superior

function mostrarInfo(){
	document.getElementById("info").style.textDecoration="underline";
	document.getElementById("infoDiv").style.display="block";
}

function mostrarSN(){
	document.getElementById("sn").style.textDecoration="underline";
	document.getElementById("snDiv").style.display="block";
}

function mostrarQuest(){
	document.getElementById("quest").style.textDecoration="underline";
	document.getElementById("questDiv").style.display="block";
}

function borrarTodo(){
	document.getElementById("info").style.textDecoration="none";
	document.getElementById("sn").style.textDecoration="none";
	document.getElementById("quest").style.textDecoration="none";
	document.getElementById("infoDiv").style.display="none";
	document.getElementById("snDiv").style.display="none";
	document.getElementById("questDiv").style.display="none";
}