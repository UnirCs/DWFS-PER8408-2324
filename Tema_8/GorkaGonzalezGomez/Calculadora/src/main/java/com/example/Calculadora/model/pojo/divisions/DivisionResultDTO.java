package com.example.Calculadora.model.pojo.divisions;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class DivisionResultDTO {

    private int quotient;

    private int remainder;
}
