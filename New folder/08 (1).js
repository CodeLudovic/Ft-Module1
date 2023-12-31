/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// ---- Recursión ----
// EJERCICIO 8
// La función countDeep recibe por parámetro un arreglo que contiene numbers, strings, booleanos, undefined y/o arreglos
// (este ultimo contienen, a su vez, más numbers, strings, booleanos, undefined y/o arreglos).
// Deberas contar la cantidad de cada uno y realizar las siguientes operaciones para llegar al resultado final.
// la cantidad de arrays (contando el array padre) menos la cantidad de numbers, al resultado multiplicarlo por la cantidad de strings, al resultado dividirlo por la cantidad de booleanos y a ese resultado elevarlo a la cantidad de undefined.

// Ejemplo:
// countDeep( [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ] ], undefined, [ false ], "9"] ) ----> Debería retornar 2
// number = 3, string = 4, boolean = 2, undefined = 2, array = 5:
// la ecuacion quedaria 5-3 = 2, 2*4 = 8, 8/2 = 4, 4^2 ------> resultado = 16

function countDeep(arraicito) {
	// Tu código aca:
	var ecuacion = 0;
	var count = 1;
	let op = 0;
	let num = 0,
		str = 0,
		boo = 0,
		undf = 0;

	var arrayChecker = function (arraicito) {
		for (var i = 0; i < arraicito.length; i++) {
			if (Array.isArray(arraicito[i])) {
				count++;
				console.log(count);
				arrayChecker(arraicito[i]);
			} else {
				switch (typeof arraicito[i]) {
					case "string":
						str++;
						console.log(str);
						break;
					case "boolean":
						boo++;
						console.log(boo);
						break;
					case "number":
						num++;
						console.log(num);
						break;
					default:
						undf++;
						console.log(undf);
						break;
				}
			}
		}
	};
	arrayChecker(arraicito);
	ecuacion = Math.pow(((count - num) * str) / boo, undf);
	return ecuacion;
}

let arry = [
	1,
	2,
	3,
	["hi"],
	[undefined, "hola", [true, "bye"]],
	undefined,
	[false],
	"9",
];
console.log(countDeep(arry));

// No modifiques nada debajo de esta linea //

module.exports = countDeep;
