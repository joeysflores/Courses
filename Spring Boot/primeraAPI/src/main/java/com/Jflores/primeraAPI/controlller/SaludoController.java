package com.Jflores.primeraAPI.controlller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//Identificar ApiRest
@RestController
@RequestMapping("/apisaludos")  //Todos los endpoints necesitan este path adelante. Sirve para distintos controladores
public class SaludoController {
  
  /*
    - Llama al endpoint mediante el metodo Get
    - Ahora el Controller(MVC) cuando detecte que recibe una request mediante GET, el path de 
      la URl va responder "Hola Mundo"
  */
  @GetMapping("/hola")
  public String holaMundo(){
    return "Hola Mundo";
  }

  /*
   * Path Variable -> Significa que podemos mandar estos parametros en el path(url)
   * 
   */
  @GetMapping("/holaname/{nombre}/{edad}")
  public String holaMundoNombre(@PathVariable String nombre, @PathVariable int edad){
    return "hola Mundo! " + nombre + " Tu edad es " + edad;  
  }


}
