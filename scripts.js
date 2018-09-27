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















