//const { BinarySearchTree } = require("./DS");

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

function BinarySearchTree(valor) {
	this.value = valor;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
	if (value < this.value) {
		if (this.left === null) {
			var newTree = new BinarySearchTree(value);
			this.left = newTree;
		} else {
			this.left.insert(value);
		}
	} else {
		if (this.right === null) {
			var newTree = new BinarySearchTree(value);
			this.right = newTree;
		} else {
			this.right.insert(value);
		}
	}
};

BinarySearchTree.prototype.size = function () {
	if (this.value === null) {
		return 0;
	}

	if (this.left === null && this.right === null) {
		return 1;
	}

	if (this.left === null) {
		return 1 + this.right.size();
	}

	if (this.right === null) {
		return 1 + this.left.size();
	}

	return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, value = []) {
	if (this.left !== null) value.push(this.left);

	if (this.right !== null) value.push(this.right);

	cb(this.value);

	if (value.length > 0) {
		value.shift().breadthFirstForEach(cb, value);
	}

	return value;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, pedido) {
	if (pedido === "pre-order") /* nodo */ cb(this.value);
	/* izquierda */ if (this.left && this.left.depthFirstForEach(cb, pedido));
	/* derecha */ if (this.right && this.right.depthFirstForEach(cb, pedido));
};

BinarySearchTree.prototype.searchMaxTwo = function () {
	// tu código acá:
	let testArr = [];
	// let array = miAbol.breadthFirstForEach((val) => {
	// 	depth.push(val);
	// }, depth);
	// console.log(array);
	this.depthFirstForEach(function (val) {
		testArr.push(val);
	}, "pre-order");

	return testArr.slice(testArr.length - 2);
};

let miArbol = new BinarySearchTree(16);
miArbol.insert(6);
miArbol.insert(23);
miArbol.insert(2);
miArbol.insert(14);
miArbol.insert(17);
miArbol.insert(31);
miArbol.insert(5);
miArbol.insert(44);

console.log(miArbol);
console.log(miArbol.searchMaxTwo());

// No modifiques nada debajo de esta linea //

module.exports = {
	BinarySearchTree,
};
