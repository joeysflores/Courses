import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item : MenuItem) => {
    // console.log(item)
    const itemExist = order.find(orderItem => orderItem.id === item.id)
    if (itemExist) {
      // Si el item ya existe en el order, se actualiza su cantidad
      const updatedOrder = order.map(orderItem => orderItem.id === item.id ? 
        {...orderItem, quantity: orderItem.quantity + 1}: 
        orderItem)
        setOrder(updatedOrder)
    } else{
      // Se crea un nuevo objeto newItem que incluye todas las propiedades de item y agrega quantity con valor 1
      // Esto con el fin de cumplir con el tipo OrderItem que requiere quantity
      const newItem = {...item, quantity: 1}
      
      // Se crea un array nuevo agregando el elemento item al array order
      setOrder([...order, newItem])
    }
  }
  console.log(order)

  return (
    addItem
  )
}
