// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, object) {
	// Tu código acá
	let dan = Object.values(object);
	let complete = [...array, ...dan];

	for (let i = 0; i < complete.length; i++) {
		for (let j = 0; j < complete.length - 1; j++) {
			if (complete[j] > complete[j + 1]) {
				[complete[j], complete[j + 1]] = [complete[j + 1], complete[j]];
			}
		}
	}
	return array;
}

let arr = [1, 2, 4, 5, 8, 13];
let object = { a: 2, b: 1, c: 5 };

console.log(insertAndSort(arr, object));

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
