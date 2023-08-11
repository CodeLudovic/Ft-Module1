// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

// BubbleSort Order

function insertAndSort(array, object) {
	// Tu código acá

	let arr = Object.values(object);

	let total = arr.concat(array);

	let change = [];

	for (let i = 0; i < total.length; i++) {
		for (let j = 0; j < total.length - 1; j++) {
			if (total[j] > total[j + 1]) {
				change = total[j];
				total[j] = total[j + 1];
				total[j + 1] = change;
			}
		}
	}

	return total;
}

// let array = [4, 8, 13];
// let obj = { a: 2, b: 1, c: 5 };

// let dan = Object.values(obj);

// //console.log([...array, ...dan]);

// console.log(insertAndSort(array, obj));

// QuickSort Order

function insertAndSort1(array, object) {
	var arr = Object.values(object);
	var total = arr.concat(array);

	var quickSort = function (array) {
		if (array.length == 1) return array;
		if (array.length == 0) return [];
		var left = [];
		var right = [];
		var pivot = array[0];
		for (var i = 1; i < array.length; i++) {
			if (array[i] < pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}
		return [].concat(quickSort(left), pivot, quickSort(right));
	};
	return quickSort(total);
}

let array = [4, 8, 13];
let obj = { a: 2, b: 1, c: 5 };

// let dan = Object.values(obj);

console.log(insertAndSort1(array, obj));
console.log(insertAndSort(array, obj));
//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
