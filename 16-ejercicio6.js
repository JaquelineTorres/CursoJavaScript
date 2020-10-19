'use strict'
/*
Que nos diga si un numero es pas o impar
1. Ventana prompt (donde metes el numero)
2. Si no es valido, pedir de nuevo el numero

*/

var number = parseInt(prompt("Introduce un numero", 0));

while (isNaN(number)){
	var number = parseInt(prompt("Introduce un numero", 0));
}

if (number %2 == 0){
	alert("Es un numero par");
}else{
	alert("Es impar");
} 