import {sumar as FuncionSumar, restar} from './funciones.js' 
import multiplicar from './funciones.js'

const resultado = FuncionSumar(20 ,10)
console.log(resultado)
const resultado2 = multiplicar(20, 10)
console.log("Multiplicar con export default: ", resultado2)

/**
 * Los modulos de ECMAScript te permite organizar tu codigo(mantenibilidad)
 */