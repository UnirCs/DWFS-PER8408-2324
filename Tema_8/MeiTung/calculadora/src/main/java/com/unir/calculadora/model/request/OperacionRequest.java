package com.unir.calculadora.model.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OperacionRequest {

    @NotBlank(message = "El tipo de operación no puede estar vacío.")
    private String tipo;

    @NotEmpty(message = "La lista de operandos no puede estar vacía.")
    private List<Integer> operandos = new ArrayList<>();

    private Integer operador;
}
