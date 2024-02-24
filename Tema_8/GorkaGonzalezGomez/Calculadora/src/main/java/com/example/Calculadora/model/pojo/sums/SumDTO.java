package com.example.Calculadora.model.pojo.sums;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class SumDTO {
    private long sumId;
    private SumOperandsDTO operands;
    private int result;
}
