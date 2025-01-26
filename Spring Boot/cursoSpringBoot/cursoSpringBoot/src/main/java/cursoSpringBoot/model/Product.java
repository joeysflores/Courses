package cursoSpringBoot.model;

public class Product {

    //Tipos de datos referenciales y no primitivos para manejar mejor los valores nulos
    private Integer id;
    private String name;
    private Double price;
    private Integer stock;

    //La biblioteca Jackson lo usa para poder hacer la deserializacion
    public Product(){

    }

    public Product(Integer id, String name, Double price, Integer stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}
