package com.unir.calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "multiplications")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Multiplication implements Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "multiplicand")
    private Double multiplicand;

    @Column(name = "multiplier")
    private Double multiplier;

    @Column(name = "result")
    private Double result;

    public static Multiplication calculateMultiplication(Double multiplicand, Double multiplier) {
        return Multiplication.builder().multiplicand(multiplicand).multiplier(multiplier).result(multiplicand * multiplier).build();
    }

    @Override
    public Operations obtainType() {
        return Operations.MULTIPLICATION;
    }
}
