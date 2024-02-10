package com.unir.calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "roots")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Root implements Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "radicand")
    private Double radicand;

    @Column(name = "index")
    private Double index;

    @Column(name = "result")
    private Double result;

    public static Root calculateRoot(Double radicand, Double index) {
        Double result = Math.pow(radicand, 1.0 / index);
        return Root.builder().radicand(radicand).index(index).result(result).build();
    }

    @Override
    public Operations obtainType() {
        return Operations.ROOT;
    }

}
