
let carta = [
    {nombre: 'Fernet',preparacion: 'Fernet y Coca'},
    {nombre: 'Gancia',preparacion:'Gancia y Sprite'},
    {nombre: 'Destornillador',preparacion: 'Jugo de naranja y Vodka'},
]

function consultarPreparacion(tragos){
    let auxCarta = '';
    let auxTragos = '';
    let aDevolver = [];

    return function(carta){
        for (let i = 0; i < tragos.length; i++){
            auxTragos = tragos[i].toUpperCase()

            for(let j = 0; j < carta.length; j++){
                auxCarta = carta[j].nombre.toUpperCase() 
                if(auxCarta === auxTragos){
                    aDevolver.push('El ' + carta[j].nombre + ' se prepara con ' +carta[j].preparacion)
                }
            }
        }
        if (tragos.length === aDevolver.length){
            return aDevolver
        } else {
            return 'Por favor, verifique los nombres de los tragos que quiere consultar'
        }

    }
}

let tragos = ['fernet','destornillador']
console.log(consultarPreparacion(tragos)(carta))

tragos = ['fernet', 'gin']
console.log(consultarPreparacion(tragos)(carta))

//let tragos2 = ['gancia','destornillador']
//consultarPreparacion(tragos2)(carta)

