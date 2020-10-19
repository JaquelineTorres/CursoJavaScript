'use strict'
//Funciones
function calculadora(numero1,numero2, mostrar = false){

	if (mostrar == false) {
	// Conjunto de funciones 
		console.log("Suma: " + (numero1+numero2));
		console.log("Resta: " + (numero1-numero2));
		console.log("Multiplicación: "+ (numero1*numero2));
		console.log("División: " + (numero1/numero2));
		console.log(mostrar)
		console.log("*******************************");
			//return "Hola soy la calculadora";
		}else{
			document.write("Suma: " + (numero1+numero2)+ "<br/>");
			document.write("Resta: " + (numero1-numero2)+ "<br/>");
			document.write("Multiplicación: "+ (numero1*numero2)+ "<br/>");
			document.write("División: " + (numero1/numero2)+ "<br/>");
			document.write(mostrar+ "<br/>")
			document.write("*******************************"+ "<br/>");
		}

	}

//calculadora(12,8);
//calculadora(98,2);
calculadora(1,4);
calculadora(2,5,true);
calculadora(4,10,true);
/*
for (var i =1; i <= 10; i++){
	console.log(i);
	calculadora(i,8);
}
*/