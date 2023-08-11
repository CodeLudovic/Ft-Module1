//Recorrer array en forma recursiva
function recorrerArrayRecursivamente(array, index = 0) {
	// Caso base: si el índice es igual a la longitud del array, terminamos la recursión.
	if (index === array.length) {
		return;
	}
	// Realizar alguna operación en el elemento actual del array.
	console.log(array[index]);
	// Llamar recursivamente a la función con el siguiente índice.
	recorrerArrayRecursivamente(array, index + 1);
}

// Ejemplo de uso
const miArray = [1, 2, 3, 4, 5];
recorrerArrayRecursivamente(miArray);
