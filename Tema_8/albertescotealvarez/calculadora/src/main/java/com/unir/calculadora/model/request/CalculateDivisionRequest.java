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
public class CalculateDivisionRequest {

    @NotNull(message = "Dividend cannot be null")
    private Double dividend;

    @NotNull(message = "Divisor cannot be null")
    private Double divisor;

}
