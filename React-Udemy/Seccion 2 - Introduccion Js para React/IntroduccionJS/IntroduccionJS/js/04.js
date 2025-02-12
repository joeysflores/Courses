//Objetos -> Coleccion de propiedades
//Propiedad -> Una asociacion entre una clave/llave y un valor

const producto = {
  nombre : "Tablet",
  precio : 300,
  disponible : false
}

//Formas de como acceder
console.log(producto)
console.table(producto) // Se ve como una tabla
console.log(typeof producto)
console.log(producto.nombre)

const nombre2 = producto.nombre
console.log(nombre2)

//Destructuring
const {nombre} = producto  // -> Es igual a nombre = producto.nombre
console.log(nombre)

//Object Literal Enhacement -> Aplica cuando la llave y el valor son iguales
const autenticado = true
const usuario = "Juan"

const nuevoObj = {
  autenticado,
  usuario
}
console.log(nuevoObj)