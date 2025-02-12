//Bucles For
console.log("--Uso de For---")
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']

for (let i=0; i<tecnologias.length; i++){
  console.log(tecnologias[i])
}

//forEach
console.log("--Uso de forEach---")
//Daria undefined porque no genera otro arreglo
tecnologias.forEach(function(tech){  
  console.log(tech)
})

//map -> La diferencia con forEach es que te genera un nuevo arreglo en base a una condicion si lo haya
console.log("--Uso de Map---")
const arrayMap = tecnologias.map(function(tech){
  return tech
})
console.log(arrayMap)

//for ... of
console.log("--Uso de for...of---")
for(let tech of tecnologias){
  console.log(tech)
}