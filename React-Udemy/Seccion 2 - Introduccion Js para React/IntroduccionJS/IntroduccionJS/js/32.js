//Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
  e.preventDefault() //Para que se quede el mensaje de Enviando Formulario

  const nombre = document.querySelector('#nombre').value
  const password = document.querySelector('#password').value

  //Prevenir nuevas alertas
  const alertaPrevia = document.querySelector('.alerta')
  alertaPrevia?.remove()

  //Alerta de validacion
  //Es necesario renderizarlo en el formulario
  const alerta = document.createElement('DIV') //Permite generar codigo html en js
  alerta.textContent = 'Contenido de Alerta'
  alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')
  console.log(alerta)

  if (nombre === '' || password === ''){
    alerta.textContent = 'Todos los campos son obligatorios...'
    alerta.classList.add('bg-red-500')
  }else{
    alerta.textContent = 'Todo bien, iniciando sesion...'
    alerta.classList.add('bg-green-500')                    
  }

  formulario.appendChild(alerta)

  setTimeout(() => {

  }, 300)
})