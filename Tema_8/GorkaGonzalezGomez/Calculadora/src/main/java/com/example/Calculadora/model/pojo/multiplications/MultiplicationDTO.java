package com.example.Calculadora.model.pojo.multiplications;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class MultiplicationDTO {
    private long multiplicationId;

    private MultiplicationOperandsDTO operands;

    private int result;
}
