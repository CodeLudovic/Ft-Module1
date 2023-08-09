"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
	// Factorear el número recibido como parámetro y devolver en un array
	// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
	// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
	// Tu código:
	let factores = [];
	// Empieza a iterar desde 2 ya que es el primer numero que se utiliza para empezar las divisiones sucesivas
	for (let i = 2; i <= num / 2; i++) {
		// se divide constantemente por la posicion o valor de i, en este caso 2 hasta que no sea dividido mas
		while (num % i === 0) {
			// se agrega el numero factor en el array de factores del numero que ingresa.
			factores.push(i);
			console.log(factores);
			// finalmente divide el numero Num por la i y vuelve a ejecutar el for esta vez
			num /= i;
		}
	}
	// Si el número que queda es mayor que 1, es un factor primo
	if (num > 1) {
		factores.push(num);
		console.log(factores);
	}
	// siempre agrega el 1, por temas de test.
	factores.unshift(1);

	return factores;
}
// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
// el array recibido como parámetro
// Devolver el array ordenado resultante
// Tu código:
// [7  ,  8,  5,  2  ,11]
//  i  > i+1
// si es mayor intercambio
// Recorro los punteros
// generar un marcador que  que incialmente sea true
// let swap = true ====> si llego ha hacer un cambio lo modifio a true
// mientras que swap sea true tengo que seguir haciendo el ordenamiento
// 2 for  o 1 while

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				// Intercambiar elementos si están en el orden incorrecto
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				//0  1
				//j j+1      15           5      =         5            15
				//1  2
				//j j+1      15           17     =         15           17 No es Mayor, continua.
				//2  3
				//j j+1      17           22      =        17           22 No es Mayor, continua
				//3  4
				//j j+1      22           18      =        18           22

				//                                         22

				//                                    ArrOrganizado
			}
		}
	}
	return array;
}
let arr = [15, 5, 17, 22, 18];
// bubbleSort(arr);
function insertionSort(array) {
	// Implementar el método conocido como insertionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando arreglos
	// Devolver el array ordenado resultante
	// Tu código:
	let valorActual = 0;
	for (let i = 1; i < array.length; i++) {
		valorActual = array[i];
		let j;

		for (j = i - 1; j >= 0 && array[j] > valorActual; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = valorActual;
	}
	console.log[array];
	return array;
}
insertionSort(arr);

function selectionSort(array) {
	// Implementar el método conocido como selectionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando dos arreglos
	// Devolver el array ordenado resultante
	// Tu código:
	//  [2  ,  8,  5,  7  , 11]
	//        i
	//             j
	// let min =   i = 0
	// i < j
	// min = j   // 5
	// si termine de recorrer el array coloco el valor min en la posicion de i
	// recorro ambos marcadores
	// ocupen 2 for
	let numero_1;
	let numero_2;
	let minimo;

	for (let i = 0; i < array.length - 1; i++) {
		minimo = i;

		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minimo]) {
				minimo = j;
			}
		}
		numero_1 = array[i];
		numero_2 = array[minimo];
		array[minimo] = numero_1;
		array[i] = numero_2;
	}
	return array;
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	factorear,
	bubbleSort,
	insertionSort,
	selectionSort,
};
