package com.unir.calculadora.model.pojo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@Getter
@Setter
public class BaseResponse<T, Error> {

    private T data;

    @Schema(subTypes = Objects.class)
    private Error error;

    public BaseResponse(T data, Error error) {
        this.data = data;
        this.error = error;
    }
}
