package com.unir.calculadora.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CalculateMultiplicationRequest {

    @NotNull(message = "Multiplicand cannot be null")
    private Double multiplicand;

    @NotNull(message = "Multiplier cannot be null")
    private Double multiplier;

}
