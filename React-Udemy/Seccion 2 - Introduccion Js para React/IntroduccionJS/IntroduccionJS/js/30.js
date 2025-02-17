//Eventos del DOM - clicks
const heading = document.querySelector('.heading')  //H1
const enlaces = document.querySelectorAll('.navegacion a')

// //Espera que ocurra el evento click y despues dispara la funcion en aut
// heading.addEventListener('mouseenter',() => {
//   heading.textContent = 'Nuevo heading al dar click...'
// })

// //MouseLeave
// heading.addEventListener('mouseleave',() => {
//   heading.textContent = 'Saliendo...'
// })

enlaces.forEach(enlace => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault()//Ya no tener el salto para volver al inicio de la pagina
    console.log(e)
    e.target.textContent = 'Diste click ...'
    // console.log('diste click en el enlace')
  })
})
