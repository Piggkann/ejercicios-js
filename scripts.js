function tipo_de_datos() {

	var nombre = "olaf"; // String
	var apellido = "Cano";
	var nombre_completo = nombre + " " + apellido;
	var edad = 2018 - 1980; // number
	var casado = true; // boolean
	console.log("mi nombre es " + nombre);
	console.log(nombre_completo);
	console.log(edad);
	console.log(casado);
}


function horas_de_sueño() {

	let dormir = Number(prompt("A que hora dormiste"));
	let despertar = Number(prompt("A que hora despesrtaste"));

	if(dormir <= 12) {
		var horas_dormidas = despertar + (12-dormir);
	} else {
		var horas_dormidas = despertar + (24-dormir);
	}
	console.log(horas_dormidas);

	console.log("En total dormi " + horas_dormidas + " horas");
}




function Ciclos_Regaño() {
	for (let contador = 0; contador <= 100; contador++) {
		console.log(contador);
	}
}


function Saludo() {

	if(nombre == "Anuar") {
		console.log("hola anuar");
	} else if(nombre == "alexisDoli") {
		console.log("Hola alexisDoli")
	} else {
		console.log("tu no eres Anuar ni alexisDoli");
	}
}

function pago_super() {

	let psal = 10;
	let pazucar = 20;
	let pcereal = 45;
	let parroz = 25;
	let phelado = 80;
	let gastoTotal = psal + pazucar + pcereal + parroz + phelado;

	console.log(" Tu super cuesta $" + gastoTotal);

	let presupuesto = prompt("Cuanto dinero tienes disponible");

	if(gastoTotal >= presupuesto) {
		let dinero_faltante = gastoTotal - presupuesto;
		console.log("Te va a faltar dinero " + dinero_faltante)
	} else {
		let dinero_sobrante = presupuesto - gastoTotal;
		console.log("te sobran $" + dinero_sobrante) 
	}
}



function mal_comportamiento() {

	let comportamiento = prompt("¿como te portaste?");
	let malcomportamiento = "mal";
	console.log("escribiras los numeros del 100 al 200 en el pizarron ")

		for(let contador = 100; contador <= 200; contador++) {
		console.log(contador);
	}
}


function piedra_papel_tijeras() {


	let Player1 = prompt("Player 1 ¿Eliges Piedra, Papel o Tijeras?");
	let computer = Math.ceil(Math.random() * 3); // 0 - 2

	if(computer == 1) {
		computer = "Piedra";
	} else if(computer == 2) {
		computer = "Papel";
	} else {
		computer = "Tijeras";
	}
	console.log(Player1);
	console.log(computer);

	if (Player1 == "Piedra" && computer == "Papel") {
		console.log("Gana player1");
	} else if (Player1 == "Piedra" && computer == "Piedra") {
		console.log("Empate"); 
	} else if (Player1 == "Piedra" && computer == "Tijeras") {
		console.log("Gana Player1");
	} else if (Player1 == "Papel" && computer == "Tijeras") {
		console.log("Gana Computer");
	} else if (Player1 == "Papel" && computer == "Papel") {
		console.log("Empate");
	} else if (Player1 == "Papel" && computer == "Piedra") {
		console.log("Gana Player1");
	} else if (Player1 == "Tijeras" && computer == "Papel") {
		console.log("Gana Player1");
	} else if (Player1 == "Tijeras" && computer == "Tijeras") {
		console.log("Empate");
	} else if (Player1 == "Tijeras" && computer == "Piedra") {
		console.log("Gana Computer");
	} 
		
}




function piedra_papel_tijeras2() {


let Player1 = prompt("Player1 ¿Eliges Piedra, Papel o Tijeras? *coloca tu eleccion con la primer letra en mayusculas");
let Player2 = prompt("Player2 ¿Eliges Piedra, Papel o Tijeras? *coloca tu eleccion con la primer letra en mayusculas");

console.log(Player1);
console.log(Player2);

if (Player1 == "Piedra" && Player2 == "Papel") {
		console.log("Gana player1");
	} else if (Player1 == "Piedra" && Player2 == "Piedra") {
		console.log("Empate"); 
	} else if (Player1 == "Piedra" && Player2 == "Tijeras") {
		console.log("Gana Player1");
	} else if (Player1 == "Papel" && Player2 == "Tijeras") {
		console.log("Gana Computer");
	} else if (Player1 == "Papel" && Player2 == "Papel") {
		console.log("Empate");
	} else if (Player1 == "Papel" && Player2 == "Piedra") {
		console.log("Gana Player1");
	} else if (Player1 == "Tijeras" && Player2 == "Papel") {
		console.log("Gana Player1");
	} else if (Player1 == "Tijeras" && Player2 == "Tijeras") {
		console.log("Empate");
	} else if (Player1 == "Tijeras" && Player2 == "Piedra") {
		console.log("Gana Computer");
	} 
}


function fibonacci() {

	let numeros = Number(prompt("cuantos numero quieres que calcule de la secuencia fibonacci  *Recuerda que la secuencia comienza desde el cero "));

	let a = 0;	
	let b = 1;
	let c;
	

	for (let i = 0; i <= numeros; i++) {  // i comienza en cero, hasta que numero sea mayor o igual a 0 entonces suma de uno en uno
		if (i == 0) {
			 console.log("El elemento 1 de la serie es: 0");
		 }
		 if (i == 1) {
		 console.log("El elemento 2 de la serie es: 1");
		}
		 if (i > 1) {
		 c = a + b; 
		 console.log("El elemento " + i + " de la serie es: " + c);
		 a = b;
		 b = c;
		}
	}
}


// function Fibonacci(){
//   let Elemento = Number(prompt("¿Hasta que numero quieres llegar en la serie de fibonacci?"));

//   let f0 = 0;
//   let f1 = 1;
//   let f;

//   for (var n = 0; n <= Elemento; n++) {
//     if (n == 0) {
//       console.log("El elemto 1 de la serie es: 0");
//     }
//     if (n == 1) {
//       console.log("El elemto 2 de la serie es: 1");
//     }
//     if (n > 1) {
//       f = f0 + f1;
//       console.log("El elemto " + n + " de la serie es: " + f);
//       f0 = f1;
//       f1 = f;
//     }
//   }
// }


function Ejercicio_mascotas(){

	let mascota = prompt("¿cual es tu mascota?")
	let mascotas = ["perro", "gato", "perico", "hamster", "elefante"]; // 5 elementos
               //  0       1        2         3          4
	for(let i = 0; i < mascotas,length; i++) {
		console.log(mascotas[i], "vuelta" + i);
		mascota[0] = "lobo"; // Reasignar una posicion especifica de un array
		mascotas[i]; // Seleccionar cada elemento de un array



	}
}


function contraseña() {

	let contraseña = prompt("¿Cual es tu contraseña?");
	console.log(contraseña);
	contraseña = contraseña.split(""); 

	for(let i = 0; i < contraseña.length; i++) { 

		if (contraseña[i] == "a") {
			contraseña[i] = 4; 
		} else if (contraseña[i] == "e") {
			contraseña[i] = 3;
		} else if (contraseña[i] == "i") {
			contraseña[i] = 1;
		} else if (contraseña[i] == "o") {
			contraseña[i] = 0;
		} else if (contraseña[i] == "t") {
			contraseña[i] = 7;		
		}
	}
	contraseña = contraseña.join("");
	contraseña = contraseña.toString();
	console.log(contraseña);
}


// function palindromo() {

// 	let frase = prompt("ingresa tu palabra o frase");
	
// 	frasesinespacios = frase.replace(/ /g""); //quitar espacio en una frase con g (global)
	
// 	let fraseminusculas = frasesinespacios.toLowerCase();



// 	for(let i = palindromo.length - 1; i > 0; i--) {
// 		console.log(palindromo);
	
// 	// // let palindromo = palindromo.length
// 	// // 	console.log(palindromo);
		

// 	// }

// }

function historia() {

	let dato1 = prompt("¿Cual es tu nombre?");
	let dato2 = prompt("¿donde naciste?");
	let dato3 = prompt("¿que animal te gusta");
	let dato4 = prompt("¿a donde te manda una/un chic@ cuando te deja en visto?");
	let dato5 = prompt(" como se llama el/la chic@ que te gusta?");
	let dato6 = prompt("¿como se llama la enfermedad que te da cuando no puedes dejar de ir al baño poque comiste algo y te hizo daño?");



	let historia = "un dia " + dato1 + " salio de " + dato2 + " en su " + dato3 + " con rumbo a  " + dato4 + " porque " + dato5 + " ya no le contestaba las cartas que mandaba porque tenia " + dato6 + " y olia feo. ";
	console.log(historia);

}
//un dia --- salio de ---- en su ----- con rumbo a la ------ porque ---- ya no le contestaba las cartas que mandabaque tenia ----- y olia feo. 


const historiaBoton = document.querySelector('#historia-boton'); //boton

const historiaNombre = document.querySelector('#nombre'); //input etiqueta
const historiaPueblo = document.querySelector('#pueblo');
const historiaAnimalPreferido = document.querySelector('#animalPreferido');
const historiaUnLugar = document.querySelector('#unLugar');
const historiaElCrush = document.querySelector('#elCrush');
const historiaLaEnfermedad = document.querySelector('#laEnfermedad');
const historiaCaja = document.querySelector('#historia-caja'); //lugar de la historia

historiaBoton.addEventListener('click', historia2); // Evento


function historia2() {
	event.preventDefault(); //Previene que la pagina se refresque con un submit
	let nombre = historiaNombre.value; //Valor del input
	let pueblo = historiaPueblo.value;
	let animalPreferido = historiaAnimalPreferido.value;
	let unLugar = historiaUnLugar.value;
	let elCrush = historiaElCrush.value;
	let laEnfermedad = historiaLaEnfermedad.value;
	let historia = "un dia " + nombre + " salio de " + pueblo + " en su " + animalPreferido + " con rumbo a  " + unLugar + " porque " + elCrush + " ya no le contestaba las cartas que mandaba porque tenia " + laEnfermedad + " y olia feo. ";
	historiaCaja.innerHTML = historia;



}
















	


//const es un tipo de variable en css .. vamos a utilizar cost cuando trabajemos con arrays, objects, constants, functions

// let.. es recomendado para algo que si puede cambiar de valor

// var: variable viejita del javascript viejo. Causaba muchos problemas con otras funciones.

// let: sustituye a var ya que tiene un alcance (block scope: unviverso de la variable o dicho de otra forma es donde vivira la variable)

// const y let = block scope (solo vive dentro de los corchetes)

// var = function scope (cuando una funcion manda a llamar a otra funcion, el var vive en otra funcion y esto puede ocasionar problemas)



// INPUT.

// function objToArray(array){

// 	let finalObj = {};

// 	for( let i = 0; i < array.length; i++){
// 		const node = array[i];
// 		const key = node.key;
// 		const value = node.value;
// 		let testObj = {};
// 		testObj[key] = value;
// 		console.log(testObj);

// 	}

// 	return finalObj;

// }





