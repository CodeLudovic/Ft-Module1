//const { Queue, Node, LinkedList, BinarySearchTree } = require("./DS.js");

const { ifError } = require("assert");

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
let array = [1, [2, [3, 4]], [5, 6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]
// [5, 6]
var countArray = function (array) {
	// Tu código aca:
	let suma = 0;
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			suma += countArray(array[i]);
		} else {
			suma += array[i];
		}
	}
	console.log(suma);
	return suma;
};

console.log(countArray(array));

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
var obj = {
	a: {
		a1: 10,
		a2: "Franco",
		a3: {
			f: "r",
			a: "n",
			c: {
				o: true,
			},
		},
	},
	b: 2,
	c: [1, { a: 1 }, "Franco"],
};
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (objeto) {
	// Tu código aca:
	let total = Object.keys(objeto).length;
	//console.log(total);
	for (let element in objeto) {
		if (
			typeof objeto[element] === "object" &&
			!Array.isArray(objeto[element])
		) {
			total += countProps(objeto[element]);
			console.log(total);
		}
	}

	return total;
};

console.log(countProps(obj));

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
	// Tu código aca:
	let cont = 0;
	let current = this.head;
	while (current) {
		if (isNaN(Number(current.value)) == true) {
			current.value = "Kirikocho";
			cont++;
		}
		current = current.next;
	}

	return cont;
};

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

// let myList = new LinkedList();
// myList.add(1);
// myList.add("2");
// myList.add(false);
// myList.add("Franco");

// //console.log(myList);
// myList.changeNotNumbers();
// console.log(myList.changeNotNumbers());
// console.log(myList);

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.
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

var mergeQueues = function (queueOne, queueTwo) {
	// Tu código aca:
	let miQueue = new Queue();

	while (queueOne.size() > 0 || queueTwo.size() > 0) {
		miQueue.enqueue(queueOne.dequeue());
		miQueue.enqueue(queueTwo.dequeue());
	}

	while (queueOne.size() > 0) {
		miQueue.enqueue(queueOne.dequeue());
	}

	while (queueTwo.size() > 0) {
		miQueue.enqueue(queueTwo.dequeue());
	}

	return miQueue;
};

// let queue1 = new Queue();
// let queue2 = new Queue();

// queue1.enqueue(7);
// queue1.enqueue(3);
// queue1.enqueue(5);
// queue1.enqueue(5);

// queue2.enqueue(2);
// queue2.enqueue(4);
// queue2.enqueue(6);
/*console.log(mergeQueues(queue1, queue2));*/

// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
	// Tu código aca:
	return function (num) {
		return num * multiplier;
	};
};
console.log(closureMult(4)(6));

function BinarySearchTree(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
	if (value <= this.value) {
		if (this.left) {
			this.left.insert(value);
		} else {
			this.left = new BinarySearchTree(value);
			return value;
		}
	} else {
		if (this.right) {
			this.right.insert(value);
		} else {
			this.right = new BinarySearchTree(value);
			return value;
		}
	}
};

BinarySearchTree.prototype.contains = function (value) {
	if (value === this.value) return true;
	if (value > this.value) {
		if (!this.right) {
			return false;
		} else {
			return this.right.contains(value);
		}
	}

	if (value < this.value) {
		if (!this.left) {
			return false;
		} else {
			return this.left.contains(value);
		}
	}
};

BinarySearchTree.prototype.size = function () {
	/*por fuerza bruta
      if(this.value === null) return null;
      if(this.right === null && this.left === null) return 1;
      if(this.right === null && this.left ==! null) return 1 + this.left.size();
      if(this.right ==! null && this.left === null) return 1 + this.right.size();
      if(this.right ==! null && this.left ==! null) return 1 + this.left.size() + this.right.size();*/

	if (this.value === null) return null;
	let counter = 1;
	if (this.right) counter += this.right.size();
	if (this.left) counter += this.left.size();
	return counter;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, pedido) {
	/*llega como parametro
    in order = I N D
    pre order = N I D
    post order = I D N
    recibe 2 parametros: callback y pedido 
    la callback pushea el valor del nodo*/

	if (pedido === "in-order" || pedido === undefined) {
		/* izquierda */ if (this.left && this.left.depthFirstForEach(cb, pedido));
		/* nodo */ cb(this.value);
		/* derecha */ if (this.right && this.right.depthFirstForEach(cb, pedido));
	}

	if (pedido === "pre-order") {
		/* nodo */ cb(this.value);
		/* izquierda */ if (this.left && this.left.depthFirstForEach(cb, pedido));
		/* derecha */ if (this.right && this.right.depthFirstForEach(cb, pedido));
	}

	if (pedido === "post-order") {
		/* izquierda */ if (this.left && this.left.depthFirstForEach(cb, pedido));
		/* derecha */ if (this.right && this.right.depthFirstForEach(cb, pedido));
		/* nodo */ cb(this.value);
	}
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, value = []) {
	if (this.left !== null) value.push(this.left);

	if (this.right !== null) value.push(this.right);

	cb(this.value);

	if (value.length > 0) {
		value.shift().breadthFirstForEach(cb, value);
	}
};

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
	let suma = 0;

	if (this.value) {
		suma += this.value;
		if (this.left) suma += this.left.sum();
		if (this.right) suma += this.right.sum();
	}
	return suma;
};

let miArbol = new BinarySearchTree(10);

miArbol.insert(10);
miArbol.insert(20);
miArbol.insert(30);
miArbol.insert(20);
miArbol.insert(10);

console.log(miArbol);

console.log(miArbol.sum());
module.exports = {
	countArray,
	countProps,
	mergeQueues,
	closureMult,
};
