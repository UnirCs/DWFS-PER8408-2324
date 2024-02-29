package com.example.Calculadora.model.pojo.substractions;

import lombok.*;

import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class SubstractionOperandsDTO {
    private int minuend;
    private ArrayList<Integer> substrahends;
}
