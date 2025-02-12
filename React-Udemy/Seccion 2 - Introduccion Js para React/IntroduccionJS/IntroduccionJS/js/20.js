//Logical Or y And
/**
 * || Or  - Al menos uno se cumple
 * && And - Se cumplen todas las condiciones 
 */

const saldo = 1000
const pagar = 500
const tarjeta = true

if (saldo > pagar || tarjeta){
  console.log("Puedes pagar")
}else{
  console.log("No, no puedes pagar")
}