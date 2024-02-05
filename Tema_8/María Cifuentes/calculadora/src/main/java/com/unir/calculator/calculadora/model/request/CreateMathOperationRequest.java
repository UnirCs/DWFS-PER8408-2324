package com.unir.calculator.calculadora.model.request;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CreateMathOperationRequest {

    String tipo;
    List<Double> elementos;
}
