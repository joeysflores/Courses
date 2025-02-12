//Fetch API con promises
//Promise es como un objeto que va estar disponible a futuro
const url = "https://jsonplaceholder.typicode.com/comments1"

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