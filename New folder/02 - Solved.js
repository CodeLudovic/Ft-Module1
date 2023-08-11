//const { LinkedList } = require("./DS");
// No modifiques nada arriba de esta linea //

/*
EJERCICIO 2
Agregar el método simplifyList al prototipo de LinkedList. Este método deberá filtrar 
los elementos repetidos de nuestra lista enlazada y crear una nueva lista con los elementos 
extraídos para finalmente reemplazar la lista original.
Si la lista está vacía, debe retornar false
Ejemplo:

    Suponiendo que la lista actual es: Head --> [2] --> [5] --> [1] --> [5] --> [7] --> [2] --> null
    lista.simplifyList();
    Ahora la lista resultante es: Head --> [2] --> [5] --> [1] --> [7] --> null

ACLARACIÓN: Se debe reemplazar la lista original por la nueva.
Pista: Podes usar el metodo search() ya incorporado dentro del prototype de LinkedList
  */
function LinkedList() {
	this._length = 0;
	this.head = null;
}
function Node(value) {
	this.value = value;
	this.next = null;
}

LinkedList.prototype.simplifyList = function () {
	// Tu código aca:
	let miLista = new LinkedList();

	let current = this.head;

	while (current) {
		let aux = current.value;
		if (!miLista.search(aux)) {
			miLista.add(aux);
		}
		current = current.next;
	}

	return miLista;
};
// No modifiques nada debajo de esta linea //
LinkedList.prototype.add = function (valor) {
	var nuevoNodo = new Node(valor);

	if (!this.head) {
		this.head = nuevoNodo;
	} else {
		var tailActual = this.head;
		while (tailActual.next !== null) {
			tailActual = tailActual.next;
		}
		tailActual.next = nuevoNodo;
	}
};

LinkedList.prototype.remove = function () {
	if (!this.head) {
		return undefined;
	}

	if (this.head.next === null) {
		var unicoNodo = this.head;
		this.head = null;
		return unicoNodo.value;
	}

	var nodoActual = this.head.next;
	var nodoPrevious = this.head;
	while (nodoActual.next !== null) {
		nodoPrevious = nodoActual;
		nodoActual = nodoActual.next;
	}
	nodoPrevious.next = null;
	return nodoActual.value;
};

LinkedList.prototype.search = function (arg) {
	var nodoActual = this.head;

	if (nodoActual === null) {
		return null;
	}

	while (nodoActual !== null) {
		if (typeof arg === "function") {
			if (arg(nodoActual.value)) {
				return nodoActual.value;
			}
		} else if (nodoActual.value === arg) {
			return nodoActual.value;
		}
		nodoActual = nodoActual.next;
	}

	return null;
};

let miLista = new LinkedList();

miLista.add(2);
miLista.add(5);
miLista.add(1);
miLista.add(5);
miLista.add(7);
miLista.add(2);

console.log(miLista.simplifyList());

module.exports = {
	LinkedList,
};
