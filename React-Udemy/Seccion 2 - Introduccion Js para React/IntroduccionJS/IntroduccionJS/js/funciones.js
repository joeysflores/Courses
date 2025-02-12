export const sumar = (n1, n2) => n1 + n2

export function restar(n1, n2){
  return n1 - n2
}

//Otra forma de exportarlos sin colocar export en cada funcion
// export {
//   sumar, 
//   restar
// }

//Otro Export: Export default
//1. Solo puede haber un export default por archivo
export default function multiplicar(n1, n2){
  return n1*n2
}

// const division = (n1, n2) => n1/n2
// export default division
