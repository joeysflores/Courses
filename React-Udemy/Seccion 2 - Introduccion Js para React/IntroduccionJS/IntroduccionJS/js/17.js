//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
//Array Methods
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const numeros = [10, 20, 30]

//Filter -> Nos sirve para sacar un elemento de un arreglo
const ejemploFilter = (tech) => {
  console.log(tech)
}
const nuevoArray = tecnologias.filter(ejemploFilter)

const resultado = numeros.filter(numero => numero > 16)
console.log(resultado)

//Include -> Nos sirve para verificar si hay un elemento en el arreglo
const resultado2 = tecnologias.includes('CSS')
console.log(resultado2)

//Some -> Devuelve T o F si al menos un elemento cumple la condicion
const resultado3 = numeros.some(numero => numero >15)
console.log(resultado3)

//Find -> Devuelve el primer elemento que cumple la condicion
const resultado4 = numeros.find(numero => numero > 15)
console.log(resultado4)

//Every -> Retorna T o F si todos cumplen la condicion
const resultado5 = numeros.every(numero => numero > 15)
console.log("Resultado usando every: ", resultado5)

//Reduce -> Retorna un acumulado del total
const resultado6 = numeros.reduce((total, numero) => {
  return total + numero
}, 0)
console.log("Resulado usando reduce: ", resultado6)