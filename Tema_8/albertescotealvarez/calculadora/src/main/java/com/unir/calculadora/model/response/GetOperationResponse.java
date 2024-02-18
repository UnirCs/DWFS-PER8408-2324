package com.unir.calculadora.model.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.unir.calculadora.model.pojo.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class GetOperationResponse {

    @NotNull
    private Operations operation;
    private Addition addition;
    private Subtraction subtraction;
    private Multiplication multiplication;
    private Division division;
    private Root root;
    private Power power;

    public static GetOperationResponse createResponse(Operation operation) {
        GetOperationResponse response = new GetOperationResponse();
        Operations operationType = operation.obtainType();
        switch (operationType) {
            case ADDITION -> {
                response.addition = (Addition) operation;
                response.operation = operationType;
                return response;
            }
            case SUBTRACTION -> {
                response.subtraction = (Subtraction) operation;
                response.operation = operationType;
                return response;
            }
            case MULTIPLICATION -> {
                response.multiplication = (Multiplication) operation;
                response.operation = operationType;
                return response;
            }
            case DIVISION -> {
                response.division = (Division) operation;
                response.operation = operationType;
                return response;
            }
            case ROOT -> {
                response.root = (Root) operation;
                response.operation = operationType;
                return response;
            }
            case POWER -> {
                response.power = (Power) operation;
                response.operation = operationType;
                return response;
            }
        }
        return response;
    }

}
