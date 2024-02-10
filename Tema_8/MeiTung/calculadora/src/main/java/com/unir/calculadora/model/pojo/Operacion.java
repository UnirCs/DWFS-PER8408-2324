package com.unir.calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "operaciones")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Operacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tipo")
    private String tipo;

    @ElementCollection
    @Column(name = "operandos")
    private List<Integer> operandos = new ArrayList<>();

    @Column(name = "operador")
    private Integer operador;

    @Column(name = "resultado")
    private Double resultado;
}
