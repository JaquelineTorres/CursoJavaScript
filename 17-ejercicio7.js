'use strict'

/*
Mostrar la tabla la tabla de mutiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt("¿De que numero quieres la tabla ",1));

document.write("<h1>Tabla del " + numero+"<h1/>");
for (var i =1; i <=10; i++) {
	document.write(i+" X " + numero+' = '+(i*numero)+"<br/>");
}

// Todas las tablas de multiplicar 

for (var j = 1; j <=numero; j++) {
	document.write("<h1>Tabla del " + j+"<h1/>");
	for (var i =1; i <=10; i++) {
		document.write(i+" X " + j+' = '+(i*j)+"<br/>");
	}
}
