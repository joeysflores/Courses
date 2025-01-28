package cursoSpringBoot.service;

import cursoSpringBoot.model.Product;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Lazy
//Nos dice que esto es un bean al decorarse con Service. Entonces, Spring lo almacena en su contenedor.
@Service
@ConditionalOnProperty(name = "service.products", havingValue = "list")
//Capa de Servicios o Logica del Negocio
//Servicio que consume los servicios desde una Lista Java.
public class ProductsServiceImpl implements ProductService{

    public ProductsServiceImpl(){
        System.out.println("Instancia del servicio ProductsServiceImpl ");
    }

    List<Product> products  = new ArrayList<>(Arrays.asList(
            new Product(1, "Martillo", 25.50, 100),
            new Product(2, "Destornillador", 15.75, 150),
            new Product(3, "Taladro", 120.99, 50),
            new Product(4, "Llave Inglesa", 45.30, 75)
    ));

    //Buenas practicas cuando implementamos un metodo que usamos de una interfaz
    @Override
    public List<Product> getProducts(){
        return products;
    }
}
