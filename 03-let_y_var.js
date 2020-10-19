'use strict'//para progamar mejor
// VEREMOS LAS DIFERENCIAS ENTRE "var" y "let"
alert("Hola, funciona bien");


//PRUEBA CON "var"

var numero = 40;//VALOR 40
console.log(numero);

if (true){
	var numero = 50;
	console.log(numero);// ESTO DEBE VALER 50
}

console.log(numero)//VALOR 50

// PRUEBA CON "let"
var texto ="Curso JS Jaque";
console.log(texto);// EL VALOR ES "Curso JS Jaque"

if (true){
	let texto = "Curso Laravel 5";
	/*VALOR DE TEXTO "Curso Laravel 5", CREA OTRA VARIABLE, ACTUA A NIVEL "BLOQUE" NO A NIVEL 
	"GLOBAL"*/
	console.log(texto);
}

console.log(texto);// VLOR "Curso JS Jaque"