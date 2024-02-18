package com.example.Calculadora.model.pojo.powers;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class PowerDTO {
    private long powerId;

    private PowerOperandsDTO operands;

    private int result;
}
