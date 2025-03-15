import { useEffect, useState, useMemo } from "react"
import { db } from "../data/db"

export const useCart = () => {

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

  //Otra forma: Funcion validar si carrito esta vacio -> State Derivado
  //Cada vez que cart cambie, se renderizara
  const isEmpty = useMemo(() => cart.length === 0, [cart])

  //Calculo total a pagar
  //Se calcula cada vez que el carrito tambien cambia
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity*item.price), 0), [cart])

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  }
}