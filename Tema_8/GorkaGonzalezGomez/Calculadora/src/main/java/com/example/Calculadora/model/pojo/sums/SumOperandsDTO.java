package com.example.Calculadora.model.pojo.sums;

import java.util.ArrayList;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class SumOperandsDTO {
    private ArrayList<Integer> addends;
}
