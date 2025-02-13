//Fetch API con promises
//Promise es como un objeto que va estar disponible a futuro
const url = "https://jsonplaceholder.typicode.com/posts/1/comments"

/**
 * Lo que va hacer fetch es que primero queremos una respuesta, en caso se obtenga obtenemos los datos,
 * sino, lanzaremos un error. El catch solo se habilitara cuando haya problemas de red, no de url.
 * Sera necesario de mostrar el error colocandolo cuando encuentre una response(respuesta)
 */
//Va buscar y obtener los datos (conectarse a un servidor)
fetch(url)
  .then((response) => {
    if (response.ok){
      return response.json()
    }else{
    throw new Error('Hubo un error...')
    }
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error.message)
  })


  /*Usos de fetch con metodos HTTP*/
  //POST
  fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Mi nuevo post',
      body: 'Este es el contenido del post',
      userId: 1
    })
  })
  .then(response => response.json()) 
  .then(data => console.log('Post creado:', data))
  .catch(error => console.error('Error en la petición:', error));