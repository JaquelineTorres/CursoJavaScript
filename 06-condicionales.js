'use strict'
// CONDICIONAL "IF"

// ES UNA ESTRUCTURA DE CONTROL QUE PERMITE COMPARAR ALGO 
// SI A es igial a B entonces haz algo
var edad=90;
var nombre = 'David Suarez';
/*
	operadores relacionales 
	Mayor: >
	Menor: <
	MAyor o igual: >=
	Menor o igual: <=
	Igual: ==
	Distinto: !=
*/

if (edad>=18){
	// Es mayor de edad
	console.log(nombre+' '+"tiene"+' '+edad+' '+ "años, es mayor de edad");

	if(edad<=33){
		console.log('Todavia eres millenial');
		}else if (edad>=70) {
			console.log("Eres anciano");
		}else{
			console.log("Ya no eres millenial");
		}
}else{
	console.log(nombre+' '+"tiene"+' '+edad+' '+ "años, es menor de edad");
}

	/*}else{
		console.log("Ya no eres millenial");
	}*/

/* OPERADORES LOGICOS
Son

AND (Y): &&
OR (O): ||
NEGACIÓN: ! 
*/

//NEGACIÖN
//var year =2028; SI CUMPLE Y MUESTRA que "termina en 8"

if (year != 2016){
	console.log("El año no es 2016, realemnte es: "+' '+year);
}

// AND

if (year >= 2000 && year <= 2020 && year != 2018){
	console.log("Estamos en la era actual");

}else {
	console.log("Estamos en la era post moderna");
}

// OR

// SE UTILIZAN LOS PARENTESIS "()" PARA DAR "MAYOR PREORIDAD A CIERTA OPERACIÓN"

if (year == 2008 || (year >= 2018 && year == 2028)){
	console.log("El año termina en 8");
}else{
	console.log("Año no registrado");
}