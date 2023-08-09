"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
	if (n === 0) return 1;
	else return n * nFactorial(n - 1);
	// 5      //4
	// return n * nFactorial(n - 1);
	// 4      //3
	// return n * nFactorial(n - 1);
	// 3      //2
	// return n * nFactorial(n - 1);
	// 2      //1
	// return n * nFactorial(n - 1);
	// 1      //*0 Devuelve 1 porque N es 0, este seria nuestro Caso Base.
}

// function nFactorial1(n) {
// 	if (n === 1 || n === 0) return 1;
// 	else return n * nFactorial(n - 1);
// 	 5  * 4  * 3  * 2  * 1
// 	 <-------------------- Apila las operaciones y se multiplica en este sentido
// 	 120 Result.
// }

// Opcion Iterativa
// function nFactorialIterativo(n) {
// 	let factorial = n;

// 	while (n > 1) {
// 		n--;
// 		factorial *= n;
// 	}
// 	return factorial;
// }

// console.log(nFactorialIterativo(5));
// let factorial = 20;

// factorial += factorial * (5 - 1);
// console.log(factorial);

function nFibonacci(n) {
	if (n < 2) {
		return n;
	}
	return nFibonacci(n - 1) + nFibonacci(n - 2);
}

nFibonacci(6);

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
	this.fila = [];
}

Queue.prototype.enqueue = function (n) {
	this.fila.push(n);
};

Queue.prototype.dequeue = function () {
	if (this.fila.length == 0) return undefined;
	return this.fila.shift();
};

Queue.prototype.size = function () {
	return this.fila.length;
};

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
	Queue,
	nFactorial,
	nFibonacci,
};

function frontDoorPassword(word) {
	let newWord = word.toLowerCase();
	let firstLetter = newWord.charAt(0);
	return firstLetter.toUpperCase() + "" + newWord.slice(1, newWord.length);
}

let word = "SUMMER";

frontDoorPassword(word);

// const SHIRE_HORSE_WITH_SPACES = [
// 	"Stands so high   ",
// 	"\tHuge hooves too\t",
// 	"Impatiently waits for \t \t",
// 	"    Reins and harness    ",
// 	"Eager to leave\n\n",
// ];

// function backDoorResponse(line) {
// 	let arr = [];
// 	let lines = "";
// 	for (i = 0; i < line.length; i++) {
// 		lines = line[i].trim();
// 		arr.push(lines.charAt(lines.length - 1));
// 	}
// 	//console.log(lines);
// 	return arr;
// }

// backDoorResponse(SHIRE_HORSE_WITH_SPACES);

// function backDoorResponse(line) {
// 	let lines = line.trim();
// 	lines.charAt(lines.length-1)
// 	//let letter = lines.trim();
// 	//console.log(letter);
// }

// backDoorResponse("Daniel is the Best\n\n");
