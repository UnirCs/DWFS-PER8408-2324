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
public class CalculateRootRequest {

    @NotNull(message = "Radicand cannot be null")
    private Double radicand;

    @NotNull(message = "Index cannot be null")
    private Double index;

}
