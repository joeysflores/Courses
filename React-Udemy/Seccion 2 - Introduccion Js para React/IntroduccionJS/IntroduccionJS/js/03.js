/*Tipos de datos*/

//Undefined -> Valor predeterminado de una variable que ha sido declarada pero no inicializada
let cliente

//console.log(cliente)
console.log(typeof cliente) //Nos mostrara el tipo de dato de la variable

//Strings
let alumno = "Juan"
console.log(typeof alumno)

const producto = 'Laptop 15.6"'
console.log(producto)
console.log(typeof producto)

//Numbers
const numero = 20.20
const numero2 = 30
const numero3 = -100
const numero4 = "20"

console.log(typeof numero)
console.log(typeof numero2)
console.log(typeof numero3)
console.log(numero2 + numero4) //Lo concantena como 3020

//BigInt
const numeroGrande = BigInt(1111111111111111112222222222222222222)
console.log(typeof numeroGrande)

//Boolean
const descuento = false
console.log(typeof descuento)

//Null -> Requiere que se asigne, porque no es nada.
const descuento1 = null
console.log(typeof descuento1) 

//Symbol -> Todos son unicos, al compararlos daria false
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log(primerSymbol === segundoSymbol)
