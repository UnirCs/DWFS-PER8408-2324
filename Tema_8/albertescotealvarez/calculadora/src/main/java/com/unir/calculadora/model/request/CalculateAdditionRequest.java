package com.unir.calculadora.model.request;

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
public class CalculateAdditionRequest {

    @NotNull(message = "Addends cannot be null")
    private List<Double> addends;

}
