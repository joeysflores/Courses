//Objetos - Destructuring de 2 o mas objetos

const producto = {
  nombre : "Tablet",
  precio : 300,
  disponible : false
}

const cliente = {
  nombre : "Jose",
  premium : true,
  direccion : {
    calle : "Calle Las Cantutas"
  }
}

const {nombre} = producto
const {nombre: nombreCliente, direccion: {calle}} = cliente  //Si no le colocas {} a direccion, nos dara el object

console.log(nombre)
console.log(nombreCliente)
console.log(calle)