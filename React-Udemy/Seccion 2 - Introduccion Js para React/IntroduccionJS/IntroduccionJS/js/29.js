//Manipular elementos HTML con JS
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a') // Te retorna una coleccion de elementos

//console.log(heading.textContent) //Me devuelve el texto de la etiqueta h1

//Puedo cambiarlo
heading.textContent = 'Un nuevo heading...'
heading.id = 'Un nuevo ID'

console.log(heading.textContent)

//Remover class de la etiqueta, asi se puede ir modificando el DOM
//heading.removeAttribute('class')

//Obtenemos el atributo del id en una variable
const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un nuevo valor...'

//Obtener las clase del elemento definido
console.log(inputNombre.classList)

//Manejando arreglos y cambiando su valor
console.log("enlaces: ", enlaces)
enlaces[0].textContent = 'Nuevo enlace'

//Cambiar todos los enlaces
enlaces.forEach(enlace => enlace.textContent = 'Un nuevo enlace')