package com.example.Calculadora.model.pojo.roots;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class RootDTO {
    private long rootId;

    private RootOperandsDTO operands;

    private int result;
}
