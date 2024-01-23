package com.salvaroca.calculator.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "calculations")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Calculation {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(name = "operation")
    private String operation;

    @ElementCollection
    @Column(name = "operands")
    private List<Double> operands;

    @Column(name = "result")
    private Double result;
}
