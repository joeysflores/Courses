package cursoSpringBoot.controllers;

import cursoSpringBoot.model.Customer;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping("clientes")
    public List<Customer> getCustomers(){
        return customers;
    }
}
