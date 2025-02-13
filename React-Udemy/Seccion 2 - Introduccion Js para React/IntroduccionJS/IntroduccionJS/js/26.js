//Fetch API con Async/Await
const url = "https://jsonplaceholder.typicode.com/comments"

// fetch(url)
//   .then((response) => {
//     if (response.ok){
//       return response.json()
//     }else{
//     throw new Error('Hubo un error...')
//     }
//   })
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.log(error.message)
//   })


const consultarAPI = async() => {
  try{
    //Intenta conectarse la url, espera la respuesta y cuando la reciba termina. 
    const response = await fetch(url)
    if (!response.ok){
      throw new Error('Hubo un error...')
    }
    const data = await response.json()
    console.log(data)
  }catch (error){
    console.log(error)
  }

}

consultarAPI()