package com.unir.calculadora.model.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CalculateDivisionResponse {

    private UUID id;
    private Double quotient;
    private Double remainder;

}
