package com.example.student_management.controllers;

import com.example.student_management.model.Alumno;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/alumnos")
public class AlumnoController {
    //Simulamos un maximo de 4 alumnos
    private List<Alumno> alumnos =new ArrayList<>(Arrays.asList(
        new Alumno(1, "Carlos Pérez", "carlos.perez@example.com", 20, "Matemáticas"),
        new Alumno(2, "María López", "maria.lopez@example.com", 22, "Física"),
        new Alumno(3, "Luis Gómez", "luis.gomez@example.com", 19, "Química"),
        new Alumno(4, "Ana Fernández", "ana.fernandez@example.com", 21, "Biología")
    ));

    //Mostrar todos los alumnos
    @GetMapping
    public List<Alumno> getAlumnos(){
        return alumnos;
    }

    //Obtener un alumno por su email
    @GetMapping("/{email}")
    public Alumno getAlumnoEmail(@PathVariable String email){
        for(Alumno al: alumnos){
            if (al.getEmail().equalsIgnoreCase(email))
                return al;
        }
        return null;
    }

    //Crear un nuevo alumno
    @PostMapping
    public Alumno postAlumno(@RequestBody Alumno alumno){
        alumnos.add(alumno);
        return alumno;
    }

    //Modificar info de un alumno de manera total
    @PutMapping
    public Alumno putAlumno(@RequestBody Alumno alumno){
        for(Alumno al: alumnos){
            if (al.getId() == alumno.getId()){
                al.setNombre(alumno.getNombre());
                al.setEmail(alumno.getEmail());
                al.setEdad(alumno.getEdad());
                al.setCurso(alumno.getCurso());
                return al;
            }
        }
        return null;
    }

    //Modificar info de un alumno de manera total
    @PatchMapping
    public Alumno patchAlumno(@RequestBody Alumno alumno){
        for(Alumno al: alumnos){
            if (al.getId() == alumno.getId()){
                if (alumno.getNombre() != null){
                    al.setNombre(alumno.getNombre());
                }
                if (alumno.getEmail() != null){
                    al.setEmail(alumno.getEmail());
                }
                if (alumno.getEdad() > 0){
                    al.setEdad(alumno.getEdad());
                }
                if (alumno.getCurso() != null){
                    al.setCurso(alumno.getCurso());
                }
                return al;
            }
        }
        return null;
    }

    //Eliminar un alumno por su ID
    @DeleteMapping("/{idAlumno}")
    public Alumno deleteAlumno(@PathVariable int idAlumno){
        for(Alumno al: alumnos){
            if (al.getId() == idAlumno){
                alumnos.remove(al);
                return al;
            }
        }
        return null;
    }

}
