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
public class CalculatePowerRequest {

    @NotNull(message = "Base cannot be null")
    private Double base;

    @NotNull(message = "Power cannot be null")
    private Double power;

}
