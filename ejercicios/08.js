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
// Nombre del cliente
LinkedList.prototype.encontrarPedidoRepetido = function (nombre) {
	let misTragos = new LinkedList();

	let current = this.head;

	while (current) {
		if (current.value.nombre == nombre) {
			misTragos.add(current.value);
		}
		current = current.next;
	}

	return misTragos;
};

let miTrago = new LinkedList();

miTrago.add({
	nombre: "Franco",
	trago: "Fernett",
});
miTrago.add({
	nombre: "Martin",
	trago: "Gancia",
});
miTrago.add({
	nombre: "Franco",
	trago: "Fernett",
});

console.log(miTrago);

console.log(miTrago.encontrarPedidoRepetido("Franco"));
