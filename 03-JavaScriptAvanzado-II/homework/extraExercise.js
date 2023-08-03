//1-Calculadora básica con closure:
//Crea una función que retorne un objeto con métodos para realizar operaciones matemáticas básicas (suma, división, resta y multiplicación).

function crearCalculadora() {
  // Escribe tu código
  return function (){
    return obj = {
      sum: function (x,y){
        console.log('Suma: ',x+y) 
      },
      rest: function (x,y){
        console.log('Resta: ',x-y)
      },
      div: function (x,y){
        if(y === 0) return console.log('Division: Operacion indeterminada, ningun numero es divisible entre 0');
        console.log('Division: ',x/y)
      },
      mult: function (x,y){
        console.log('Multiplicacion: ',x*y)
      }
    }
  }
}
const operaciones = crearCalculadora();

//Casos de Exito.
operaciones().sum(10,20);
operaciones().rest(10,20);
operaciones().mult(10,20);
operaciones().div(10,2);

// Cuando el segundo parametro es 0 en el caso de las divisiones.
operaciones().div(10,0);


//2-Contar ovejas
//Crea una función que retorne otra función para contar ovejas personalizadas con un nombre dado. La función debe mantener un contador interno para agregar un número consecutivo a las ovejas que cuentas.

function oveja(ovejaProp) {
  // Código bovino aquí
    let cont = 1
    let ovj = {
      nombre: ovejaProp,
      calls: cont
    }
  return function(){
    // if(Object.values(ovj).includes(ovejaProp)){
    //   return console.log(ovj)
    // }
    ovj.calls = cont++;
    let resp = (ovj.calls > 1) ? console.log(`La Oveja ${ovj.nombre} ha sido contada ${ovj.calls} veces`) 
                               : console.log(`La Oveja ${ovj.nombre} ha sido contada ${ovj.calls} vez`);
    return resp;
  }
}

let ovejaMaria = oveja('Maria')

ovejaMaria();
ovejaMaria();
ovejaMaria();

let ovejaMartha = oveja('Martha')

ovejaMartha();
ovejaMartha();
ovejaMartha();