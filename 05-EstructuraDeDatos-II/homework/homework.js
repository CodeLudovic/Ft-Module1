"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
  */
function LinkedList() {
	this._length = 0;
	this.head = null;
}
function Node(value) {
	this.value = value;
	this.next = null;
}
LinkedList.prototype.add = function (value) {
	let node = new Node(value);

	let current = this.head;

	if (!current) {
		this.head = node;
		this._length++;
	} else {
		while (current.next) {
			current = current.next;
		}
		current.next = node;
		this._length++;
	}
};
// LinkedList.prototype.add = function (value) {
// 	let newNode = new Node(value);
// 	if (!this.head) {
// 		this.head = newNode;
// 		this._length++;
// 	}
// 	let current = this.head;
// 	while (current.next) {
// 		current = current.next;
// 	}
// 	current.next = newNode;
// 	this._length++;
// };
LinkedList.prototype.remove = function () {
	//let ultimo = current.next;
	let ultimo = null;
	let eliminado = null;
	let current = this.head;
	if (this._length == 0) return null;
	if (this._length == 1) {
		ultimo = this.head.value;
		//this.head = this.head.next;
		this.head = null;
		this._length--;
		return ultimo;
	}
	while (current.next.next) {
		console.log(current.next.next);
		current = current.next;
	}
	//console.log(ultimo);
	eliminado = current.next.value;
	current.next = null;
	this._length--;
	return eliminado;
};
// LinkedList.prototype.remove = function () {
// 	if (!this.head) {
// 		return null;
// 	} else if (!this.head.next) {
// 		const value = this.head.value;
// 		this.head = null;
// 		return value;
// 	} else {
// 		let current = this.head;
// 		let previous = null;
// 		while (current.next) {
// 			previous = current;
// 			current = current.next;
// 		}
// 		previous.next = null;
// 		return current.value;
// 	}
// };

// LinkedList.prototype.search = function (n) {
// 	if (this.len == 0) return console.log("Es una lista vacia");
// 	var pointer = this.head;
// 	var check = false;
// 	if (pointer.data == n) check = true;
// 	while (!check && pointer.next != null) {
// 		pointer = pointer.next;
// 		if (pointer.data == n) check = true;
// 	}
// 	if (check) {
// 		return pointer.data;
// 	} else {
// 		return null;
// 	}
// };
LinkedList.prototype.search = function (param) {
	let current = this.head;
	while (current) {
		if (typeof param === "function") {
			if (param(current.value)) {
				return current.value;
			}
		} else {
			if (current.value === param) {
				return current.value;
			}
		}
		current = current.next;
	}
	return null;
};

let myList = new LinkedList();
myList.add("test");
myList.add("Jennifer");
myList.add("Carlos");
// //myList.search("Daniel");
myList.remove();
// myList.remove();
// //console.log(myList.search(nombre));

console.log(myList);

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
	// Para probar solo este metodo y validar que el arreglo se llena correctamente debemos definir las variables numBuckets y buckets como Let o Const y quitar los respectivos "this."
	this.numBuckets = 35;
	this.buckets = new Array(this.numBuckets).fill(null).map(() => []);
	//console.log(this.buckets)
}

//HashTable()

HashTable.prototype.hash = function (input) {
	let totalCharCode = 0;
	for (let i = 0; i < input.length; i++) {
		totalCharCode += input.charCodeAt(i);
	}
	return totalCharCode % this.numBuckets;
};

// HashTable.prototype.set = function (key, value) {
// 	let inpt = [];
// 	let checked = false;

// 	inpt[key] = value;

// 	let index = this.hash(inpt);

// 	if (typeof key !== "string") {
// 		throw new Error("La clave debe ser un string.");
// 	}
// 	for (let i = 0; i < this.tableStorage[index].length; i++) {
// 		if (this.tableStorage[index][i][0] === key) {
// 			this.tableStorage[index][i][1] = value;
// 			checked = true;
// 		}
// 	}
// 	if (checked === false) {
// 		this.tableStorage[index].push({ key, value });
// 	}
// };

HashTable.prototype.set = function set(key, value) {
	const index = this.hash(key);
	const bucket = this.buckets[index];

	if (typeof key !== "string") {
		throw new TypeError("La clave debe ser un string.");
	}

	for (let i = 0; i < bucket.length; i++) {
		const [storedKey, storedValue] = bucket[i];
		if (storedKey === key) {
			bucket[i][1] = value;
			return;
		}
	}
	bucket.push([key, value]);
};

HashTable.prototype.get = function (key) {
	const index = this.hash(key);
	const bucket = this.buckets[index];

	for (let i = 0; i < bucket.length; i++) {
		const [storedKey, storedValue] = bucket[i];
		if (storedKey === key) {
			return storedValue;
		}
	}
	return undefined;
};

HashTable.prototype.hasKey = function (key) {
	const index = this.hash(key);
	const bucket = this.buckets[index];

	for (let i = 0; i < bucket.length; i++) {
		const [storedKey, storedValue] = bucket[i];
		if (storedKey === key) {
			return true;
		}
	}
	return false;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	Node,
	LinkedList,
	HashTable,
};
