//Operadores ternarios
const auth = true
const saldo = 500
const pagar = 500
const tarjeta = true

//Condicion ?  Lo que se ejecuta : Lo que se ejecuta si no se cumple
auth ? console.log("Usuario autenticado") : console.log("No autenticado, iniciar sesion")
saldo > pagar ? 
  console.log("Puedes pagar") : 
  tarjeta ? 
    console.log("Puedes pagar con tarjeta") :
    console.log("No, no puedes pagar")
