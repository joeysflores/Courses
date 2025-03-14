import { useEffect, useState } from "react"
import Header from "./components/Header"
import Guitar from "./components/guitar"
import { db } from "./data/db"

function App() {

  //Nuestros datos desde un archivo para usarlo en el proyecto(es nuestra bd)
  const [data, setData] = useState(db)
  // //Otra forma: Si fuera desde una API, se usa useEffect
  // useEffect(() => {
  //   setData(db)
  // }, [])

  //Colocamos un valor inicial al carrito y lo pasamos al state para que se maneje mejor el localstorage
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [cart, setCart] = useState(initialCart)
  const MAX_ITEMS = 5 //Codigo mas limpio
  const MIN_ITEMS = 1

  //Se lanza cuando el cart cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(item){
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id)
    console.log('Elementos existe?: ', itemExists)
    //Validar si el elemento ya esta en el array
    if (itemExists >= 0){
      console.log('Existe...')
      //Validar que no se exceda del limite
      if (cart[itemExists].quantity >= MAX_ITEMS) return

      const updatedCart = [...cart] //Pasamos una copia del cart
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
    }else{
      console.log('No existe...Agregando')
      item.quantity = 1
      setCart([...cart, item]) //Agregar guitarras al arreglo cart
    }
  }
  // console.log(data)

  //Eliminar items del cart
  function removeFromCart(id){
    //Del arreglo, solo filtramos y quitamos la guitarra a eliminar 
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }

  //Incrementar cantidades por item - hacer funcional al botoncito +
  function increaseQuantity(id){
    //Se puede hacer similar al addToCart, pero lo haremos con map
    const updatedCart = cart.map(item => {
      //Se le pone limite max de cantidad
      if (item.id === id && item.quantity < MAX_ITEMS){
        return{
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  //RETO 1: Decrementar cantidades por item
  function decreaseQuantity(id){
    const updatedCart = cart.map(item =>{
      if (item.id === id && MIN_ITEMS < item.quantity){
        return{
          ...item, //copia del elemento
          quantity: item.quantity - 1
        }
      }
      return item
    })
    //Si es 0, quitarlo del carrito porque se le decrementara
    setCart(updatedCart)
  }

  //Funcion limpiar carrito
  function clearCart(){
    setCart([])
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {/*Se puede tambien usar return*/}
          {data.map((guitar) => (
              <Guitar
                key={guitar.id} //Siempre se usa cuando se itere una lista
                guitar={guitar}
                setCart={setCart}
                addToCart={addToCart}
              />
            )
          )}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

export default App
