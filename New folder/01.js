//const { LinkedList } = require("./DS");

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada 
   de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/
function LinkedList() {
	this.head = null;
}

function Node(value) {
	this.value = value;
	this.next = null;
}

LinkedList.prototype.add = function (value) {
	let nodo = new Node(value); //creo el nuevo nodo
	let current = this.head; //almaceno la cabecera de la lista

	if (!current) {
		//verifico que la lista no esté vacía
		this.head = nodo; //si está vacía almaceno en cabecera al primer nodo
		return nodo;
	}

	while (current.next) {
		//recorrro la lista
		current = current.next;
	}

	current.next = nodo; //almaceno en el nodo anterior la referencia del nuevo nodo
	return nodo;
};

function bubbleSort(array) {
	let temp = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return;
}

let miLista = new LinkedList();
miLista.add(8);
miLista.add(12);
miLista.add(3);
miLista.add(16);

console.log(miLista);

// LinkedList.prototype.sortList = function () {
//   // Tu código aca:
//   let current = this.head;
//   let current2 = this.head;

//   if (!current) return false;

//   while (current) {
//     //hace las veces de i
//     while (current2.next) {
//       //hace las veces de j
//       if (current2.value <= current2.next.value) {
//         let temp = current2.value;
//         current2.value = current2.next.value;
//         current2.next.value = temp;
//       }
//       current2 = current2.next;
//     }
//     current = current.next;
//   }
//   return
// };
LinkedList.prototype.sortList = function () {
	if (!this.head || !this.head.next) {
		return list; // Lista vacía o con un solo elemento ya está ordenada
	}
	let swapped;
	do {
		swapped = false;
		let current = this.head;
		while (current.next) {
			if (current.value < current.next.value) {
				// Intercambiar valores de los nodos
				let temp = current.value;
				current.value = current.next.value;
				current.next.value = temp;
				swapped = true;
			}
			current = current.next;
		}
	} while (swapped);
	return;
};
miLista.sortList();
console.log(miLista);
// No modifiques nada debajo de esta linea //
module.exports = {
	LinkedList,
};
