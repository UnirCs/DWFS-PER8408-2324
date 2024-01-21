package com.unir.calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "subtractions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Subtraction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "minuend")
    private Integer minuend;

    @ElementCollection
    @Column(name = "subtrahends")
    private List<Integer> subtrahends;

    @Column(name = "result")
    private Integer result;

    public static Subtraction calculateSubtraction(Integer minuend, List<Integer> subtrahends) {
        Integer result = minuend;
        for (Integer subtrahend : subtrahends) {
            result -= subtrahend;
        }
        return Subtraction.builder().minuend(minuend).subtrahends(subtrahends).result(result).build();
    }

}
