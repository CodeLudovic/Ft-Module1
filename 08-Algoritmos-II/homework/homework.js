"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
	// Implementar el método conocido como quickSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	if (array.length == 1) return array;
	if (array.length == 0) return [];

	var left = [];
	var right = [];

	let pivot = array[0];

	for (var i = 1; i < array.length; i++) {
		if (array[i] < pivot) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}

	return [].concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([4, 9, 2, 1, 6, 3, 8]));

function mergeSort(array) {
	// Implementar el método conocido como mergeSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	//okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	quickSort,
	mergeSort,
};
