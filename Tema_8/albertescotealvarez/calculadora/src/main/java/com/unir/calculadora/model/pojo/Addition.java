package com.unir.calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "additions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Addition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @Column(name = "operands")
    private List<Integer> operands;

    @Column(name = "result")
    private Integer result;

    public static Addition calculateAddition(List<Integer> operands) {
        Integer result = 0;
        for (Integer operand : operands) {
            result += operand;
        }
        return Addition.builder().operands(operands).result(result).build();
    }

}
