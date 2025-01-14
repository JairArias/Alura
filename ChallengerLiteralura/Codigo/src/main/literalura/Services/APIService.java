package com.arias.literalura.Services;


import com.arias.literalura.Exceptions.HttpRequestException;
import com.arias.literalura.Exceptions.ParseJsonException;

import java.io.IOException;

public interface APIService {

    String httpResponse(String paramURL) throws NullPointerException, IOException, InterruptedException, ParseJsonException, HttpRequestException;
}
