package com.example.Calculadora.model.pojo.powers;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class PowerOperandsDTO {
    private int base;

    private int power;
}
