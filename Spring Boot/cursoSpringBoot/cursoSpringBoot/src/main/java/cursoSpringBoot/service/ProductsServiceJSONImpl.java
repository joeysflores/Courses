package cursoSpringBoot.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import cursoSpringBoot.model.Product;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;

@Primary
@Service
//Servicio que Obtiene los products desde el json
public class ProductsServiceJSONImpl implements ProductService{

    @Override
    public List<Product> getProducts() {
        List<Product> products;

        //Proceso de des-serializacion
        try {
            products = new ObjectMapper().
                        readValue(this.getClass().getResourceAsStream("/products.json"),
                            new TypeReference<List<Product>>() {});
            return products;
        }catch (IOException e){
            throw new RuntimeException(e);
        }
    }
}
