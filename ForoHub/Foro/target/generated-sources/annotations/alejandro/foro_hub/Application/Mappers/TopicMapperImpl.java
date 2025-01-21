package arias.ForoHub.Application.Mappers;

import arias.ForoHub.Application.DTOs.TopicDTO;
import arias.ForoHub.Domain.Models.Topico;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-01-20T19:27:44-0500",
    comments = "version: 1.6.2, compiler: javac, environment: Java 17.0.13 (Ubuntu)"
)
@Component
public class TopicMapperImpl implements TopicMapper {

    @Override
    public Topico dtoToEntity(TopicDTO topicDTO) {
        if ( topicDTO == null ) {
            return null;
        }

        Topico topico = new Topico();

        topico.setTitulo( topicDTO.titulo() );
        topico.setMensaje( topicDTO.mensaje() );
        topico.setFechaCreacion( topicDTO.fechaCreacion() );
        topico.setStatus( topicDTO.status() );

        return topico;
    }

    @Override
    public void updateEntityFromDto(TopicDTO dto, Topico entity) {
        if ( dto == null ) {
            return;
        }

        entity.setTitulo( dto.titulo() );
        entity.setMensaje( dto.mensaje() );
        entity.setFechaCreacion( dto.fechaCreacion() );
        entity.setStatus( dto.status() );
    }
}
