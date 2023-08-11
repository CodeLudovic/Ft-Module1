function Queue() {
	this.array = [];
}

Queue.prototype.enqueue = function (valor) {
	this.array.push(valor);
};

Queue.prototype.dequeue = function () {
	return this.array.shift();
};

Queue.prototype.size = function () {
	return this.array.length;
};

let arr = [
	"margarita",
	"daiquiri",
	"mojito",
	"margarita",
	"pina colada",
	"negroni",
	"daiquiri",
];
let tragos = new Queue();

for (i = 0; i < arr.length; i++) {
	tragos.enqueue(arr[i]);
}
//-----------------------------------------hasta aquí para poder trabajar
let comanda = {};
while (tragos.size() >= 0) {
	let trago = tragos.dequeue();
	if (Object.keys(comanda).length === 0) {
		comanda[trago] = { trago: trago, cantidad: 1 };
	}
	if (!comanda[trago]) {
		comanda[trago] = { trago: trago, cantidad: 1 };
	} else {
		comanda[trago].cantidad++;
	}
}
console.log(comanda);
