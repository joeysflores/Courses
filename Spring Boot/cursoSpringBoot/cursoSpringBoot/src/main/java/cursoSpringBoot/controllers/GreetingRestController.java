package cursoSpringBoot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingRestController {

    //Le indico que el parametro se usara en la URL
    @GetMapping({"/saludo/{name}", "/hola/{name}"})
    public String greeting(@PathVariable String name){
        return "hola " + name;
    }
}
