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

function acomodarPeliculas(listaDePeliculas, nombre) {
	let miPila = new Queue();

	for (let i = 0; i < listaDePeliculas.length; i++) {
		if (
			listaDePeliculas[i].nombre != nombre &&
			listaDePeliculas[i].duracion >= 1.0
		) {
			miPila.enqueue(listaDePeliculas[i]);
		}
	}
	return miPila;
}

let pelicuas = [
	{
		nombre: "SpiderMan",
		duracion: 1.0,
	},
	{
		nombre: "IronMan",
		duracion: 0.45,
	},
	{
		nombre: "Hulk",
		duracion: 2.2,
	},
	{
		nombre: "Thor",
		duracion: 3.2,
	},
	{
		nombre: "Groot",
		duracion: 0.3,
	},
	{
		nombre: "Watchmen",
		duracion: 4.2,
	},
];
acomodarPeliculas(pelicuas, "SpiderMan");
console.log(acomodarPeliculas(pelicuas, "SpiderMan"));
