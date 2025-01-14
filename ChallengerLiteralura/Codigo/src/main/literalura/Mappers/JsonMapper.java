package com.arias.literalura.Mappers;

import com.arias.literalura.Exceptions.ParseJsonException;

public interface JsonMapper {

    <T> T jsonMap (String json, Class<T> clazz) throws ParseJsonException;
}
