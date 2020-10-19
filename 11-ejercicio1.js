'use strict'
/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y sis son iguales 
PLUS: Si los nuemros no son un numero o si son menores o iguales a cero, vulava a pedir los datos
*/

var numeros1 = parseInt (prompt('Introduce el primer numero',0));
var numeros2 = parseInt (prompt('Introduce el segundo numero',0));

//console.log(numeros1,numeros2);
//La función isNaN() determina cuando el valor es NaN o no, La propiedad global NaN es un valor que representa Not-A-Number.
while(numeros1<=0 || numeros2<=0 || isNaN(numeros1)|| isNaN(numeros2)){
	numeros1 = parseInt (prompt('Introduce el primer numero',0));
	numeros2 = parseInt (prompt('Introduce el segundo numero',0));
}

if (numeros1==numeros2){
	alert("Los numeros son iguales");

}else if (numeros1>numeros2){
	alert("El numero mayor es:" + numeros1);
	alert("EL numero menor es:" + numeros2);

}else if (numeros2>numeros1){
	alert("El numero mayor es: " + numeros2);
	alert("El numero menor es: "+ numeros1);

}else{
	alert("Introduce numeros correctos");
}