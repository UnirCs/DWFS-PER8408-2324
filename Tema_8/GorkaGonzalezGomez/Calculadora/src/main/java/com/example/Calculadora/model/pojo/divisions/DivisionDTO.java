package com.example.Calculadora.model.pojo.divisions;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class DivisionDTO {
    private long divisionId;

    private DivisionOperandsDTO operands;

    private DivisionResultDTO result;
}
