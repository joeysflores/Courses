package cursoSpringBoot.controllers;

import cursoSpringBoot.model.Customer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class CustomerRestController {
    private List<Customer> customers = new ArrayList<>(Arrays.asList(
            new Customer(123, "Gerardo Lopez", "gerardo", "123"),
            new Customer(456, "Joey Flores", "joey", "456"),
            new Customer(789, "Mileny Flores", "mileny", "789"),
            new Customer(234, "Yasser Massimo", "yasser", "246")
    ));

    //Endpoint de lista de clientes
    @GetMapping("clientes")
    public List<Customer> getCustomers(){
        return customers;
    }

    //Endpoint de un cliente en especifico
    @GetMapping("clientes/{username}")
    public Customer getCustomer(@PathVariable String username){
        for(Customer c: customers){
            if (c.getUsername().equalsIgnoreCase(username))
                return c;
        }
        return null;
        //Solo para devolver algo, no es buena practica por ahora. Mas adelante se hara manejo de excepciones.
    }
}
