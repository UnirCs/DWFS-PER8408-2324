package com.unir.calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "additions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Addition implements Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ElementCollection
    @Column(name = "addends")
    private List<Double> addends;

    @Column(name = "result")
    private Double result;

    public static Addition calculateAddition(List<Double> addends) {
        Double result = 0.0;
        for (Double addend : addends) {
            result += addend;
        }
        return Addition.builder().addends(addends).result(result).build();
    }

    @Override
    public Operations obtainType() {
        return Operations.ADDITION;
    }

}
