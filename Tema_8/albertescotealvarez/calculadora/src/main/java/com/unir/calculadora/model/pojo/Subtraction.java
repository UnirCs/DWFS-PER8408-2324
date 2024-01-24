package com.unir.calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "subtractions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Subtraction implements Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "minuend")
    private Double minuend;

    @ElementCollection
    @Column(name = "subtrahends")
    private List<Double> subtrahends;

    @Column(name = "result")
    private Double result;

    public static Subtraction calculateSubtraction(Double minuend, List<Double> subtrahends) {
        Double result = minuend;
        for (Double subtrahend : subtrahends) {
            result -= subtrahend;
        }
        return Subtraction.builder().minuend(minuend).subtrahends(subtrahends).result(result).build();
    }

    @Override
    public Operations obtainType() {
        return Operations.SUBTRACTION;
    }

}
