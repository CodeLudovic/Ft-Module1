//const { Stack } = require("./DS");
//⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// Implementar la función crearStack, la cual recibirá por parámetro un string.
// El string recibido tendrá un formato de sucesión de letras y astericos, de la siguiente manera:
// "UNAPALABRA"
// "OTRAPALABRA"
// crearStack debe retornar false en caso de recibir un string vacío.
// Caso contrario, deberá crear un Stack, al que se agregarán y retirarán valores EN ORDEN según la secuencia recibida
// en el string, siguiendo la siguiente lógica:
//  - Una letra (A , B , C) -> Agregar la letra al Stack
//  - Un asterisco () -> Retirar un elemento del Stack
// Finalmente, la función deberá retornar el Stack resultante.
// Asimismo, debo prevenir que la función intente retirar un elemento del Stack si el mismo está vacío, en cuyo caso
// la función deberá retornar el string "Stack vacío"
//
// EJEMPLOS:
//   ✔️crearStack("EJEMPLO") => [E,E,M,L,O]
//   ✔️crearStack("OTROEJEMPLO") => [O,O,E,P,O]
//   ✔️crearStack("") => false
//   ✔️crearStack("RET**ORNARFAL**SO") => "Stack vacío"

function Stack() {
	this.array = [];
}

Stack.prototype.push = function (elemento) {
	this.array.push(elemento);
};

Stack.prototype.pop = function () {
	return this.array.pop();
};

Stack.prototype.size = function () {
	return this.array.length;
};

function crearStack(string) {
	let nuevoStack = new Stack();

	if (string === "") {
		return false;
	} else {
		for (let i = 0; i < string.length; i++) {
			if (string[i] === "") {
				nuevoStack.pop();
			} else nuevoStack.push(string[i]);
		}
	}
	return nuevoStack;
}

let asd = crearStack("EJEMPLO");

console.log(asd);

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = { crearStack };
