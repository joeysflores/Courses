package cursoSpringBoot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador para generar palindromos
 *
 */

@RestController
public class PalindromoRestController {

    /**
     * JAVA DOC
     * @param word La palabra a verificar
     * @return Un mensaje indicando si la palabra es un palindromo o no.
     */
    @GetMapping("/palindromo/{word}")
    public String palindromo(@PathVariable String word){
        boolean result = EsPalindromo(word);
        if (result){
            return "La palabra " + word + " es un palindromo";
        }
        else{
            return "La palabra " + word + " NO es un palindromo";
        }
    }

    /**
     * Metodo para verificar si la palabra es un palindromo
     * @param word La palabra a verificar.
     * @return true si la palabra es palindromo, false si no lo es.
     */
    //Las solicitudes deben tener la logica, por ahora se coloca para aprender
    private boolean EsPalindromo(String word){
        if (word == null || word.isEmpty())
            return false;

        // Eliminar espacios y convertir a minúsculas
        String cleanWord = word.replaceAll("\\s+", "").toLowerCase();

        // Comparar la palabra con su reverso
        return cleanWord.equals(new StringBuilder(cleanWord).reverse().toString());
    }
}
