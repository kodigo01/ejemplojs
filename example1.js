var num1 = document.getElementById("numero1");
var num2 = document.getElementById("numero2");

var result = document.getElementById("resultado");
var btn = document.getElementById("btnArea");

btn.addEventListener("click",calcular);

function calcular(){
	var n1 = parseInt(num1.value);
	var n2 = parseInt(num2.value);

	result = ((n1*n2)/2);

	alert("El area es: "+ result);
}
/////////////////////////////////////////////////
var btn = document.getElementById("btnArea");

btn.addEventListener("click",calcular);

function calcular(){
	var n1 = parseInt(document.getElementById("numero1").value);
	var n2 = parseInt(document.getElementById("numero2").value);
var result = document.getElementById("resultado");

	result = ((n1*n2)/2);

	alert("El area es: " + result)
}
