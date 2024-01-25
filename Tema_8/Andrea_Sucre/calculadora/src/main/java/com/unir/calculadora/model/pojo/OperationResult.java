package com.unir.calculadora.model.pojo;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class OperationResult {
    public Long operationId;
    public Double result;
}
