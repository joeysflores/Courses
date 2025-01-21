package cursoSpringBoot.controllers;

import cursoSpringBoot.model.Customer;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/clientes")
public class CustomerRestController {
    private List<Customer> customers = new ArrayList<>(Arrays.asList(
            new Customer(123, "Gerardo Lopez", "gerardo", "123"),
            new Customer(456, "Joey Flores", "joey", "456"),
            new Customer(789, "Mileny Flores", "mileny", "789"),
            new Customer(234, "Yasser Massimo", "yasser", "246")
    ));

    //Endpoint de lista de clientes
    @GetMapping
    //@RequestMapping(method = RequestMethod.GET)
    public List<Customer> getCustomers(){
        return customers;
    }

    //Endpoint de un cliente en especifico
    @GetMapping("/{username}")
    //@RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public Customer getCustomer(@PathVariable String username){
        for(Customer c: customers){
            if (c.getUsername().equalsIgnoreCase(username))
                return c;
        }
        return null;
        //Solo para devolver algo, no es buena practica por ahora. Mas adelante se hara manejo de excepciones.
    }

    @PostMapping
    //Se creo un metodo, pero hace falta decorar el metodo con PostMapping para que sea un endpoint
    //@RequestMapping(method = RequestMethod.POST)
    public Customer postCustomer(@RequestBody Customer customer){
        customers.add(customer);
        return customer;
    }

    @PutMapping
    //Se encarga de actualizar los datos del cliente
    //@RequestMapping(method = RequestMethod.PUT)
    public Customer putCustomer(@RequestBody Customer customer){
        for(Customer c: customers){
            if (c.getID() == customer.getID()){
                c.setName(customer.getName());
                c.setUsername(customer.getUsername());
                c.setPassword(customer.getPassword());
                return c;
            }
        }
        return null;
    }

    @DeleteMapping("/{idCustomer}")
    //@RequestMapping(value = "/{idCustomer}", method = RequestMethod.DELETE)
    public Customer deleteCustomer(@PathVariable int idCustomer){
        for(Customer c: customers){
            if (c.getID() == idCustomer){
                customers.remove(c);
                return c;
            }
        }
        return null;
    }

    @PatchMapping
    //@RequestMapping(method = RequestMethod.PATCH)
    public Customer patchCustomer(@RequestBody Customer customer){
        for(Customer c: customers){
            if (c.getID() == customer.getID()){
                if (customer.getName() != null){
                    c.setName(customer.getName());
                }
                if (customer.getUsername() != null){
                    c.setUsername(customer.getUsername());
                }
                if (customer.getPassword() != null){
                    c.setPassword(customer.getPassword());
                }
                return c;
            }
        }
        return null;
    }
}
