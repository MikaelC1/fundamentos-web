// alert("Hola Js") 
// console.log("Hola Js")

//Tipo de Variable
var nombre = 'Juan';
var telefono = '0123456789';
var email = 'juan@gmail.com';
var edad = 29;

// Declaracion de Variables flijas, no cambia su valor
const casado = true;
const sexo = 'Masculino';
const mensaje = 'Hola, "Feliz Cumpleaños" ';


// mensaje = "Otro Mensaje"

// Puede cambiar su valor y se ocupa en ciclos
let empleo = 'Programador';

// Arreglos, Listas
let colores = ['Azul', 'Verde', 'Rojo', 'Cafe', 'Morado']
let numero = [8, 9, 3, 9, 0, 33, 99, 23]

// Objetos o Diccionarios
const auto = {
    colores: ['Verde', 'Rojo', 'Azul'],
    tipo: ['Automatico', 'Manual'],
    cilindros: [4, 6, 8],
    puertas: [3, 5, 7, 9],
    modelos:[
        {
            A1:'Sedan', 
            descripcion: 'auto sedan etc...',
            tipoPiel: false,
        },
        {
            A2:'Hashback', 
            descripcion: 'auto sedan etc...',
            tipoPiel: true,
        },
        {
            A3:'Hashback 2', 
            descripcion: 'auto sedan etc...',
            tipoPiel: true,
        },
        {
            A4:'Sedan 2', 
            descripcion: 'auto sedan etc...',
            tipoPiel: false,
        }
    ]

}

//empleo = "Diseñador Web";
//auto = "nissan"; 
//auto = "ford"; 

// Llaves {}: Son para crear objetos
// Corchetes [] Son para crear arrays 
// Parentesis() Son para iniciar un llamado o accion

// console.log(auto.modelos[1]) 

let numeroUno = 7;
let numeroDos = 1;

// Condicion
// if(numeroUno < numeroDos){
    // Si la condicion se cumple
    // console.log('El Numero 1 es Mayor')
// } else {
    // Si la condicion no se cumple
    // console.log('El Numero 1 no es Mayor')
// }


// Condicion
// if(numeroUno == numeroDos){
    // Si la condicion se cumple
    // console.log('Son Iguales')
// } else {
    // Si la condicion no se cumple
    // console.log('No Son Iguales')
//}

// Ciclos
for(let i = 0; i < 5 ; i++){
    console.log(colores[i]);
    // console.log(colores[0])
    // console.log(colores[1])
    // console.log(colores[2])
    // console.log(colores[3])
    // console.log(colores[4])
}

colores.forEach(element => {
    console.log(element)
})

console.clear();

// Funciones - Todo dentro de las funciones solo funcionan dentro de las funciones en si
function sumar() {
    let ingresoUno = 50;
    let ingresoDos = 127;
    let resultadoSuma = ingresoUno + ingresoDos;

    console.log(resultadoSuma)
}

// Llamado a la funcion Sumar - Ejecuta todo lo que esta dentro de la funcion 
sumar()

let factura = {
    nombreEmisor:'Juan',
    rfcEmisor:'SDFGHJKIUYTRUH132',
    nombreReceptor:'Pedro',
    rfcReceptor:'5678Y8IYIU',
    concepto:[
        {nombre:'Pala', costoUnitario:79, sku:'8978SD'},
        {nombre:'Metro', costoUnitario:90, sku:'fghU89UIjytuf'},
        {nombre:'Pico', costoUnitario:200, sku:'SDFHUI'},
        {nombre:'Desarmador', costoUnitario:40, sku:'UISDHFIUYSD'}
    ],
    iva:16
};

for (let i = 0; i < 4; i++){
    console.log(factura.concepto[i].nombre);
}

factura.concepto.forEach(result => {
    console.log(result.nombre);
})