package cursoSpringBoot.controllers;

import cursoSpringBoot.model.Customer;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/clientes")
public class CustomerRestController {

    //Jamas debe estar esto dentro de un controller, solo es para fines de aprender.
    private List<Customer> customers = new ArrayList<>(Arrays.asList(
            new Customer(123, "Gerardo Lopez", "gerardo", "123"),
            new Customer(456, "Joey Flores", "joey", "456"),
            new Customer(789, "Mileny Flores", "mileny", "789"),
            new Customer(234, "Yasser Massimo", "yasser", "246")
    ));

    //Endpoint de lista de clientes
    @GetMapping
    //@RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Customer>> getCustomers(){
        return ResponseEntity.ok(customers);
    }

    //Endpoint de un cliente en especifico
    @GetMapping("/{username}")
    //@RequestMapping(value = "/{username}", method = RequestMethod.GET)

    /*Cuando colocamos ? decimos que la respuesta puede variar de acuerdo al tipo de dato*/
    public ResponseEntity<?> getCustomer(@PathVariable String username){
        for(Customer c: customers){
            if (c.getUsername().equalsIgnoreCase(username))
                return ResponseEntity.ok(c);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente no encontrado con username: " + username);
        //return null;
        //Solo para devolver algo, no es buena practica usar null por ahora. Mas adelante se hara manejo de excepciones.
    }

    @PostMapping
    //Se creo un metodo, pero hace falta decorar el metodo con PostMapping para que sea un endpoint
    //@RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> postCustomer(@RequestBody Customer customer){
        customers.add(customer);

        URI location = ServletUriComponentsBuilder
                        .fromCurrentRequest()
                        .path("/{username}")
                        .buildAndExpand(customer.getUsername())
                        .toUri();

        //return ResponseEntity.created(location).build();
        return ResponseEntity.created(location).body(customer);
    }

    @PutMapping
    //Se encarga de actualizar los datos del cliente
    //@RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> putCustomer(@RequestBody Customer customer){
        for(Customer c: customers){
            if (c.getID() == customer.getID()){
                c.setName(customer.getName());
                c.setUsername(customer.getUsername());
                c.setPassword(customer.getPassword());
                return ResponseEntity.noContent().build();
            }
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{idCustomer}")
    //@RequestMapping(value = "/{idCustomer}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteCustomer(@PathVariable int idCustomer){
        for(Customer c: customers){
            if (c.getID() == idCustomer){
                customers.remove(c);
                //NO_CONTENT -> No mostrara el mensaje que pusimos, si queremos usamos el metodo ok.
                return ResponseEntity.noContent().build();
            }
        }
        return ResponseEntity.notFound().build();
    }

    @PatchMapping
    //@RequestMapping(method = RequestMethod.PATCH)
    public ResponseEntity<?> patchCustomer(@RequestBody Customer customer){
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
                return ResponseEntity.ok("Cliente modificado satisfactoriamente: " + customer.getID());
            }
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente no encontrado con el ID: " + customer.getID());
    }
}
