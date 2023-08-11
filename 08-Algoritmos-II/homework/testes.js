if (array.length == 1) return array;
if (array.length == 0) return [];

let i = Math.floor(array.length / 2);
let pivote = array[i];
//console.log(pivote);
//Divide y venceras
array.splice(i, 1); // Quita el numero el cual representa el pivote para que no haya duplicidad a la hora de concaternarnoslos.\
//	// let concatenados = izq.concat(der);
//	// console.log(concatenados)

return [
	...quickSort(array.filter((y) => y < pivote)),
	pivote,
	...quickSort(array.filter((y) => y > pivote)),
];
