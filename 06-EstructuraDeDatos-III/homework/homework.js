"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree() {
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
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	BinarySearchTree,
};
