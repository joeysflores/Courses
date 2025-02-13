//Performance y Multiples Async Await
const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/todos"
const url3 = "https://jsonplaceholder.typicode.com/todos"

//Problema con esperar llamadas
const consultarAPI = async() => {
  try{
    //Medimos el performance
    const inicio = performance.now()
    //Intenta conectarse la url, espera la respuesta y cuando la reciba termina. 
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const response2 = await fetch(url2)
    const data2 = await response2.json()
    console.log(data2)
    const response3 = await fetch(url3)
    const data3 = await response3.json()
    console.log(data2)

    const fin = performance.now()
    console.log(`El resultado de la 1era funcion es: ${fin - inicio} ms`)
  }catch (error){
    console.log(error)
  }

}
consultarAPI()

//Solucion
const consultarAPI2 = async() => {
  try{
    //Medimos el performance
    const inicio = performance.now()
    
    //Inicia todas las peticiones al mismo tiempo - Util cuando las queries son independientes
    const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)])
    const [data, data2, data3] = await Promise.all([response, response2, response3])

    console.log(data)
    console.log(data2)
    console.log(data3)

    const fin = performance.now()
    console.log(`El resultado de la 2da funcion es: ${fin - inicio} ms`)
  }catch (error){
    console.log(error)
  }
}

consultarAPI2()

