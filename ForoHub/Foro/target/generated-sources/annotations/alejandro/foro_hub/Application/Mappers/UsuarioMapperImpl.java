package arias.ForoHub.Application.Mappers;

import arias.ForoHub.Application.DTOs.ActualizarUsuarioDto;
import arias.ForoHub.Application.DTOs.PerfilDto;
import arias.ForoHub.Application.DTOs.UsuarioDTO;
import arias.ForoHub.Domain.Models.Perfil;
import arias.ForoHub.Domain.Models.Usuario;
import java.util.LinkedHashSet;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-01-20T19:27:44-0500",
    comments = "version: 1.6.2, compiler: javac, environment: Java 17.0.13 (Ubuntu)"
)
@Component
public class UsuarioMapperImpl implements UsuarioMapper {

    @Override
    public Usuario dtoToEntity(UsuarioDTO usuarioDTO) {
        if ( usuarioDTO == null ) {
            return null;
        }

        Usuario usuario = new Usuario();

        usuario.setNombre( usuarioDTO.nombre() );
        usuario.setEmail( usuarioDTO.email() );
        usuario.setPass( usuarioDTO.pass() );
        usuario.setPerfiles( perfilDtoSetToPerfilSet( usuarioDTO.perfiles() ) );

        return usuario;
    }

    @Override
    public void updateEntityFromDto(ActualizarUsuarioDto dto, Usuario usuario) {
        if ( dto == null ) {
            return;
        }

        usuario.setNombre( dto.nombre() );
        usuario.setEmail( dto.email() );
        if ( usuario.getPerfiles() != null ) {
            Set<Perfil> set = perfilDtoSetToPerfilSet( dto.perfiles() );
            if ( set != null ) {
                usuario.getPerfiles().clear();
                usuario.getPerfiles().addAll( set );
            }
            else {
                usuario.setPerfiles( null );
            }
        }
        else {
            Set<Perfil> set = perfilDtoSetToPerfilSet( dto.perfiles() );
            if ( set != null ) {
                usuario.setPerfiles( set );
            }
        }
    }

    protected Perfil perfilDtoToPerfil(PerfilDto perfilDto) {
        if ( perfilDto == null ) {
            return null;
        }

        Perfil perfil = new Perfil();

        perfil.setNombre( perfilDto.nombre() );

        return perfil;
    }

    protected Set<Perfil> perfilDtoSetToPerfilSet(Set<PerfilDto> set) {
        if ( set == null ) {
            return null;
        }

        Set<Perfil> set1 = new LinkedHashSet<Perfil>( Math.max( (int) ( set.size() / .75f ) + 1, 16 ) );
        for ( PerfilDto perfilDto : set ) {
            set1.add( perfilDtoToPerfil( perfilDto ) );
        }

        return set1;
    }
}
