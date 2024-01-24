package com.unir.calculadora.model.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CalculateSubtractionRequest {

    @NotNull(message = "Minuend cannot be null")
    private Double minuend;

    @NotEmpty(message = "Subtrahends cannot be empty")
    private List<Double> subtrahends;
}
