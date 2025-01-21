package arias.ForoHub.Application.Mappers;

import arias.ForoHub.Application.DTOs.CursoDTO;
import arias.ForoHub.Domain.Models.Categoria;
import arias.ForoHub.Domain.Models.Curso;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-01-20T19:27:44-0500",
    comments = "version: 1.6.2, compiler: javac, environment: Java 17.0.13 (Ubuntu)"
)
@Component
public class CursoMapperImpl implements CursoMapper {

    @Override
    public Curso dtoToCurso(CursoDTO cursoDTO) {
        if ( cursoDTO == null ) {
            return null;
        }

        Curso curso = new Curso();

        curso.setNombre( cursoDTO.nombre() );
        curso.setCategoria( cursoDTO.categoria() );

        return curso;
    }

    @Override
    public CursoDTO cursoToDto(Curso curso) {
        if ( curso == null ) {
            return null;
        }

        String nombre = null;
        Categoria categoria = null;

        nombre = curso.getNombre();
        categoria = curso.getCategoria();

        CursoDTO cursoDTO = new CursoDTO( nombre, categoria );

        return cursoDTO;
    }

    @Override
    public void updateEntityFromDto(CursoDTO dto, Curso curso) {
        if ( dto == null ) {
            return;
        }

        curso.setNombre( dto.nombre() );
        curso.setCategoria( dto.categoria() );
    }
}
