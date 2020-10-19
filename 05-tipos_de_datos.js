'use strict'
// OPERADORES
var numero1 = 7;
var numero2 = 12;
var operacion = numero1%numero2;
// EL "%" ES EL RESTO DE LA DIVISIÓN, LO QUE SOBRA DE LA DIVISON, PARA VER SI UN NUMERO ES PAR O IMPAR
 
alert("Es el resultado de la operación es: "+operacion);




// TIPOS DE DATOS 
// SON, "int","flout", "booleano=verdadero o falso", "Caneda de texto"
//alert("HOlA tipos de datos");

var numero_entero = 44;
var cadena_texto = "Hola 'que' tal";
var cadena_texto2= 'Hola "que" tal';
var verdadero_o_falso = false;


var numero_falso = "33";
//console.log(numero_falso);
//console.log(numero_falso+7);

//-------------------------------------------------------
// MISMA FUNCIONALIDAD PARA VONVERTIR DE CADENA A NUMERO
//console.log(Number(numero_falso)+7);
//console.log(parseInt(numero_falso)+7);
//console.log(parseFloat(numero_falso)+7);
//-------------------------------------------------------

//console.log(cadena_texto,cadena_texto2);
//console.log(verdadero_o_falso);

//----------CONVERTIR A STRING---------------------------
//console.log(numero_entero+'Texto concatenado');
console.log(String(numero_entero)+4);
//-------------------------------------------------------


//----------PARA SABER EL TIPO DE DATO QUE ES------------
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof cadena_texto2);
console.log(typeof numero2);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);