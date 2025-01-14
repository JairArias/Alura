# Literalura
Bienvenidos al challenger Literalura. 

Tabla de Contenido

* [Proyecto](#explicación-del-proyecto)
* [Tecnologías](#tecnologías-usadas)
* [Estructura](#estructura-del-proyecto)
* [Flujo](#flujo-de-ejecución)
  * [Menú General](#presentación-del-menú-general)
  * [Libros](#menú-de-libros)
  * [Autores](#menú-de-autores)

---

## Explicación del Proyecto
***
Literalura es una aplicación de consola diseñada para la gestión de libros y autores mediante la integración de la API externa **[Gutendex](https://gutendex.com/)** y una base de datos relacional. El propósito principal es fortalecer habilidades de backend, como el manejo de excepciones, la validación de datos, la persistencia en bases de datos y la implementación de patrones de diseño.

Este proyecto es parte del segundo desafío del módulo backend de Alura-Oracle, enfocado en fomentar buenas prácticas de desarrollo y habilidades para resolver problemas complejos mediante el uso de Java y herramientas modernas.

---

## Tecnologías Usadas
***
- **Java 17**: Lenguaje de programación principal.
- **Spring Boot**: Framework para la creación de aplicaciones backend con enfoque modular.
- **JPA (Java Persistence API)**: Para la persistencia y mapeo de datos en la base de datos.
- **MapStruct**: Para la transformación eficiente entre DTOs y entidades.
- **PostgreSQL**: Base de datos relacional.
- **API [Gutendex](https://gutendex.com/)**: Fuente de datos inicial para libros y autores.
- **Lombok**: Simplificación del código con anotaciones para getters, setters y constructores.
- **Scanner**: Entrada y salida de datos en consola.
- **Jackson**: Libreria usada para el mapeo y transformación de datos json en objetos java, y viceversa.

---

## Estructura del Proyecto
***
El proyecto está organizado en capas para garantizar una arquitectura limpia y mantenible:

- **Servicios**: Contienen la lógica del negocio.
- **Repositorios**: Acceden y manipulan los datos almacenados en la base de datos.
- **Entidades**: Representan los modelos de datos.
- **DTOs**: Intercambio de datos con la API y entre capas.
- **Mappers**: Transforman datos entre entidades y DTOs.

---

## Flujo de ejecución

El programa interactúa principalmente con el usuario a través de un menú general, que deriva en submenús según la funcionalidad deseada. A continuación, se describe el flujo:

### Presentación del Menú General

Menu principal

![Captura desde 2024-11-15 15-27-00](https://github.com/user-attachments/assets/4f05f50b-f9e3-429a-8775-a789819c196d)


### Menú de Libros

Submenú opción `1` del [menú principal](#presentación-del-menú-general) permite buscar libros a través de la API externa. Lo anterior incluye:

![Captura desde 2024-11-15 15-32-49](https://github.com/user-attachments/assets/e1bf0d6a-c93e-4591-9ed4-f311c71e6a76)

**Si se elige opción 1 del submenú:**

Aparecerá el mensaje del libro que desea buscar en la API:

![Captura desde 2024-11-15 15-35-51](https://github.com/user-attachments/assets/18dd60f9-f213-4e7b-ac15-135077718ec7)

Escenarios:

1. Se encuentra coincidencia y se persiste.
2. No se encuentra coincidencia, por lo cual se descarta transacción en la base de datos.
3. Se encuentra una coincidencia que previamente se había consultado, y se descarta operación en la DB.

### Menú de autores

Submenú de autores posee la siguiente estructura:

![Captura desde 2024-11-15 15-56-14](https://github.com/user-attachments/assets/5b99798c-b3a0-4129-a77f-5eccc8194b2b)

Como se observa, este permite: buscar autores, listar autores vivos y persistir información en la base de datos. Destaca la validación de duplicados y el uso de consultas personalizadas para filtrar resultados de autores que se encuentran con vida 
hasta cierta fecha dada por el usuario:

```java
public void listaAutoresVivosHastaCiertaFecha(){
        System.out.print("Introduza la fecha para consultar autores vigentes a la fecha: ");
        int fecha;
        try{
            fecha = entry.nextInt();
            entry.nextLine();
        } catch (InputMismatchException e) {
            System.out.println("\nEntrada inválida. Por favor ingrese un año en formato numérico.");
            return;
        }
        List<String> listaAutoresVivos = autorRepository
                .findByFechaFallecimientoIsNullOrFechaFallecimientoAfter(fecha)
                .stream()
                .map(autorMapper::EntityToDTO)
                .map(AutorDTO::nombreAutor)
                .toList();
        if(listaAutoresVivos.isEmpty()){
            System.out.println("\nNo se ha encontrado una lista de autores vivos a la fecha");
        }else{
            System.out.println("\nAutores vigentes a la fecha\n");
            listaAutoresVivos.forEach(System.out::println);
        }
    }
```

Ahora destaquemos lo que sucedería si el usuario elige cualquiera de las opciones disponibles:

**Si elige la opción 1 del submenú:**

Al igual que en el caso de libros, el usuario podrá buscar un autor en particular, y asimismo se encontrará con tres posibles escenarios:

1. Se encuentra coincidencia y se persiste.
2. No se encuentra coincidencia, por lo cual se descarta transacción en la base de datos.
3. Se encuentra una coincidencia que previamente se había consultado, y se descarta operación en la DB.
