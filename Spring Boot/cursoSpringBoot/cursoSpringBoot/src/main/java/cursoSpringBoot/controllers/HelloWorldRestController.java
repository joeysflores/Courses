package cursoSpringBoot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldRestController {

    //Se crea un endpoint, hay 3 rutas distintas que devolveria lo mismo
    @GetMapping({"/hello", "/hw", "/hola"})
    public String helloWorld(){
        return "Hello World!";
    }
}
