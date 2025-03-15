//No es necesario importars
export type Guitar = {
  id: number
  name: string
  image: string
  description: string
  price: number
}

export type CarItem = Guitar & {
  quantity: number
}

export type GuitarID = Guitar['id']
// //Herencia con utility types
// export type CarItem = Pick<Guitar, 'id'|'name'|'price'|'image'|'description'> &{
//   quantity: number
// }

//Herencia usando interface
// export interface CarItem extends Guitar{
//   quantity: number
// }