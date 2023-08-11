//const { BinarySearchTree } = require("./DS");
//⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// EJERCICIO 09
// Implementar el método insertWord en el prototype de BinarySearchTree
// El método será similar al método insert ya implementado, pero en lugar
// de agregar valores numéricos al árbol, se encargará de insertar palabras
// que tomarán posición basándose en la cantidad de caracteres que posean.
//
// EJEMPLO:
//
// Iniciando con el árbol llamado arbolDePalabras:
//
//                          "Palabra"
//                            /    \
//
// Ejecutamos el método arbolDePalabras.insertWord("Perro")
//
//                          "Palabra"
//                            /    \
//                       "Perro"
//
// La palabra "Perro" se insertó en el nodo de la izquierda por tener una cantidad
// de caracteres menor a "Palabra".
//
// Ejecutamos el método arbolDePalabras.insertWord("Murciélago")
//
//                          "Palabra"
//                            /    \
//                       "Perro"  "Murciélago"
//
// Siguiendo la misma lógica, la palabra se insertó a la derecha por tener una
// cantidad de caracteres mayor.
//
// RESPUESTAS!:
// ✔️ Si el método recibe un string vacío, debe retornar false
// ✔️ Si el método recibe una palabra de tamaño igual a una palabra
// ya existente, debe retornar false.
// ✔️ La palabra debe insertarse en el lugar correspondiente y, de ser así,
// retornar el string que ha sido insertado

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

BinarySearchTree.prototype.insertWord = function (string) {
	// Tu código acá

	let cantidad = string.length;

	if (string.length === 0) {
		return false;
	}

	if (cantidad === this.value.length) return false;

	if (cantidad < this.value.length) {
		//PARA QUE ENTRE A LA IZQUIERDA
		if (this.left === null) {
			var newTree = new BinarySearchTree(string);
			this.left = newTree;
			return string;
		} else {
			this.left.insertWord(string);
			return string;
		}
	} else {
		if (this.right === null) {
			var newTree = new BinarySearchTree(string);
			this.right = newTree;
			return string;
		} else {
			this.right.insertWord(string);
			return string;
		}
	}
};

let arbol = new BinarySearchTree("palabra");

arbol.insertWord("perro");
arbol.insertWord("murcielago");
arbol.insertWord("MURCIEGALO");

console.log(arbol);

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = { BinarySearchTree };
