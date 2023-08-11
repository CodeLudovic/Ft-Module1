// No modifiques nada arriba de esta linea //
/* 
  EJERCICIO 3
  Implementar el método count dentro del prototype de LinkedList que deberá retornar la suma de todos los
  valores dentro de la lista.
  En caso de que la lista esté vacía, retornar 0
  Ejemplo:
  Dada esta lista: [4] --> [2] --> [7] -- > null
  LinkedList.count() --> 13
*/

function LinkedList() {
	this._length = 0;
	this.head = null;
}
function Node(value) {
	this.value = value;
	this.next = null;
}

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

LinkedList.prototype.count = function () {
	// Tu código aca:
	let suma = 0;
	let current = this.head;
	while (current) {
		suma += current.value;
		current = current.next;
	}
	return suma;
};
let miLista = new LinkedList();

miLista.add(2);
miLista.add(5);
miLista.add(1);
miLista.add(5);
miLista.add(7);
miLista.add(2);

console.log(miLista.count());

// No modifiques nada debajo de esta linea //

module.exports = LinkedList;
