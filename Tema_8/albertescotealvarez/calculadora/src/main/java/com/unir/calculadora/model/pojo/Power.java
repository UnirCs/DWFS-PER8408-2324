package com.unir.calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "powers")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Power implements Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "base")
    private Double base;

    @Column(name = "power")
    private Double power;

    @Column(name = "result")
    private Double result;

    public static Power calculatePower(Double base, Double power) {
        Double result = Math.pow(base, power);
        return Power.builder().base(base).power(power).result(result).build();
    }

    @Override
    public Operations obtainType() {
        return Operations.POWER;
    }

}
