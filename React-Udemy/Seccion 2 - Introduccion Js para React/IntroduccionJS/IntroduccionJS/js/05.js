//Objetos - Manipulacion

const producto = {
  nombre : "Tablet",
  precio : 300,
  disponible : false
}

//Object.freeze(producto) // -> No modificar valores y propiedades
Object.seal(producto)   // -> Permite modificar las propiedades existentes, pero no agregar o eliminar

//Reescribir un valor
producto.disponible = true

//Si no existe, agregar propiedad
producto.imagen = 'imagen.jpg'
console.log(producto)

//Eliminar propiedad
delete producto.precio
console.log(producto)