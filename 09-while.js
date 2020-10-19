'use strict'

// BUCLE WHILE "MIESTRAS"
var year = 2018;

// INCREMENTO
while (year <= 2051){
	// ejecuta esto
	console.log("Estamos en el año "+ year);

	year++;// para no hacer este bucle INFINITO

}

// DECREMENTO

while(year != 1991){// en el momento en que el numero sea igual a 1991, se detiene
	console.log("Estamos en el año " + year);

	if (year==2000){
		break;
	}
	year--;
}



// DO while
var years=30;
do{
	
	alert("SOLO CUANDO SEA DIFERENTE A 20");
	years--;

}while(years>25)