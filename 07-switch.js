'use strict'

// ESTRUCTURA SWITCH
//console.log("SWITCH");

var edad = 23;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Acabas de cumplir la mayoria de edad";
	break;
	case 25:
		imprime = "Ya ere un adulto";
	break;
	case 40:
		imprime = "Crisis de los 40";
	break;
		case 75:
		imprime = "Eres un aciano";
	break;
	default:
		imprime = "Tu edad es neutral";
	break;
}
console.log(imprime);