package com.unir.calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "divisions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Division implements Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "dividend")
    private Double dividend;

    @Column(name = "divisor")
    private Double divisor;

    @Column(name = "result")
    private Double result;

    public static Division calculateDivision(Double dividend, Double divisor) {
        return Division.builder().dividend(dividend).divisor(divisor).result(dividend / divisor).build();
    }

    @Override
    public Operations obtainType() {
        return Operations.DIVISION;
    }
}
