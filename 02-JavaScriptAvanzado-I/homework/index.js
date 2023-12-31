x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
    var x = 10;
    console.log(x); // 10
    console.log(a); // 8
    var f = function (a, b, c) {
        b = a;
        console.log(b); // 8
        b = c;          
        var x = 5; 
    };
    f(a, b, c);
    console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1


console.log(bar); // Undefined
// console.log(baz); // No declarada.
foo(); // 'Hola'
function foo() {
    console.log('Hola!'); 
}
var bar = 1;
baz = 2;


var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // Franco


var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony


var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash //  Tony (Errado)
console.log(pm);  // Franco

console.log([] == ![])

function test() {
    console.log(a);
    console.log(foo());
 
    var a = 1;
    function foo() {
       return 2;
    }
 }

 test();


var snack = 'Meow Mix';
 
function getFood(food) {
   if (food) {
        var snack = 'Friskies';
        return snack;
   }
   return snack;
}

getFood(false);

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};


var test = obj.prop.getFullname; 

console.log(obj.prop.getFullname()); // Aurelio De Rosa ||


// Esto da undefined porque el contexto al cual hacia referencia la funcion fullname se pierde cuando guardamos la funcion en una variable
// o hacemos referencia a ella en la variable, por esta razon al intentar llamar ese Fullname que esta pidiendo ese This lo busca en el contexto global de Window y ahi no existe,
// Es por eso el porque es Undefined.
console.log(test()); // Natalia Nerea ||


function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();