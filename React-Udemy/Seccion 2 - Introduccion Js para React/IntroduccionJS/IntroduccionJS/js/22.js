//Optional chaining (?)
const alumno = {
  nombre: "Juan",
  clase: "Prog3",
  aprobado: true,
  examenes: {
    examen1: 90
  }
}

//Podemos revisar si una propiedad existe - Sirve para cuando consultamos a una bd que no viene con todos los campos
console.log(alumno.examenes?.examen1)


//Nullish coalescing operator (??) -> Retorna el operando del lado derecho, cuando el del lado izq es null o undefined
const pagina = 10 ?? 1  //Util para paginadores
console.log(pagina)
