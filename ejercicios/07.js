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

let personas = [
	{
		nombre: "Jose",
		ticket: "FALSO",
		estado: "Desconocido",
	},
	{
		nombre: "Daniel",
		ticket: "VIP",
		estado: "Conocido",
	},
	{
		nombre: "Vale",
		ticket: "VIP",
		estado: "Desconocido",
	},
];
function vipInvitados(arr) {
	let miCola = new Queue();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].ticket == "VIP" && arr[i].estado == "Conocido") {
			miCola.enqueue(arr[i]);
		}
	}

	return miCola;
}
console.log(vipInvitados(personas));
