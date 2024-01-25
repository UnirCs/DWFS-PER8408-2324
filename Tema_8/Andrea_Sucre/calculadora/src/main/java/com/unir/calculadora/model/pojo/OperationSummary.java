package com.unir.calculadora.model.pojo;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OperationSummary {
    private Long operationId;
    private Double result;
    private List<Double> values;
    private OperationType operation;
}
