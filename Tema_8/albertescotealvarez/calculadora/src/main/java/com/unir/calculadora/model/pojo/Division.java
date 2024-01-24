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

    @Column(name = "quotient")
    private Double quotient;

    @Column(name = "remainder")
    private Double remainder;

    public static Division calculateDivision(Double dividend, Double divisor) {
        return Division.builder().dividend(dividend).divisor(divisor).quotient(dividend / divisor).remainder(dividend % divisor).build();
    }

    @Override
    public Operations obtainType() {
        return Operations.DIVISION;
    }
}
