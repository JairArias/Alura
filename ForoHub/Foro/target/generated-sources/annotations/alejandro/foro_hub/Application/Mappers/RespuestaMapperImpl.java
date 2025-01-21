package arias.ForoHub.Application.Mappers;

import arias.ForoHub.Application.DTOs.RespuestaDto;
import arias.ForoHub.Application.DTOs.RespuestaUpdateDto;
import arias.ForoHub.Domain.Models.Respuesta;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-01-20T19:27:44-0500",
    comments = "version: 1.6.2, compiler: javac, environment: Java 17.0.13 (Ubuntu)"
)
@Component
public class RespuestaMapperImpl implements RespuestaMapper {

    @Override
    public Respuesta dtoToEntity(RespuestaDto dto) {
        if ( dto == null ) {
            return null;
        }

        Respuesta respuesta = new Respuesta();

        respuesta.setMensaje( dto.mensaje() );
        respuesta.setFechaCreacion( dto.fechaCreacion() );
        respuesta.setSolucion( dto.solucion() );

        return respuesta;
    }

    @Override
    public void updateEntityFromDto(RespuestaUpdateDto dto, Respuesta respuesta) {
        if ( dto == null ) {
            return;
        }

        respuesta.setMensaje( dto.mensaje() );
        respuesta.setFechaCreacion( dto.fechaCreacion() );
        respuesta.setSolucion( dto.solucion() );
    }
}
