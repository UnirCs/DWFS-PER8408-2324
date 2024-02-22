package com.unir.calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Entity
@Table(name="math_operations")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class MathOperation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "operator")
    private OperationType operator;

    @ElementCollection
    @Column(name = "operands")
    private List<Double> operands;

    @Column(name = "result")
    private Double result;
}