//Objetos - Unir dos o mas objetos

const producto = {
  nombre : "Tablet",
  precio : 300,
  disponible : false
}

const cliente = {
  nombre : "Jose",
  premium : true,
}

const carrito = {
  cantidad : 1,
  ...producto  //Hace que se coloque un obj producto existente dentro de otro obj. Conocido como spread Operator
}
console.log(carrito)

//Unir producto con cliente

//Me guarda el nuevo objeto el obj producto y el cliente, entonces no los une. 
// const nuevoObjt = {
//   producto: {...producto},
//   cliente : {...cliente}
// }
// console.log("Nuevo obj de union producto + cliente: ", nuevoObjt)

// //Forma 1: 
const nuevoObjt = {
  ...producto,
  ...cliente
}
console.log("Nuevo obj de union producto + cliente: ", nuevoObjt)

//Forma 2: En una linea
const nuevoObjt2 = Object.assign(producto, cliente)
console.log("Nuevo obj2 de union producto + cliente: ", nuevoObjt)
