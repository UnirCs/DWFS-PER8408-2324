package com.example.Calculadora.model.pojo.substractions;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class SubstractionDTO {
    private long subtractionId;

    private SubstractionOperandsDTO operands;

    private int result;
}
