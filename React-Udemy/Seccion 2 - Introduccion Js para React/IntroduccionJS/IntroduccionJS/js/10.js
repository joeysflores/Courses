const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
//tecnologias[10] = 'Nest.js'
//console.table(tecnologias)
console.log(tecnologias)

const nuevoArreglo = [...tecnologias, 'Nest.js'] //No muta el arreglo original
console.table(nuevoArreglo)

//Elimina el primer elemento de un arreglo
tecnologias.shift()
console.table(tecnologias)

//Filter -> Filtra de acuerdo a una condicion
const tecnologias2 = tecnologias.filter(function(tech){
  if (tech !== "HTML")
    return tech
})
console.log(tecnologias2)

//Map -> Itera sobre todos los elementos de la coleccion
const tecnologias3 = tecnologias.map(function(tech){
  console.log(tech)
})
console.log(tecnologias3)