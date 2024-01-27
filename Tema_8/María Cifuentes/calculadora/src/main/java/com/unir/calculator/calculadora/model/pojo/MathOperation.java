package com.unir.calculator.calculadora.model.pojo;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "mathOperations")
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

    @Column(name = "tipo")
    private String tipo;

    @ElementCollection
    @Column(name = "elementos")
    private List<Double> elementos;

    @Column(name = "resultado")
    private Double resultado;
}
