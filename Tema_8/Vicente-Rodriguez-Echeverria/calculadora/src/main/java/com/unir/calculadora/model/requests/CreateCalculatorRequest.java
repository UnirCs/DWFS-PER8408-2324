package com.unir.calculadora.model.requests;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CreateCalculatorRequest {
    long id;
    String operacion;
    String numeros;
    double resultado;
    String error;
}
