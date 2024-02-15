package com.example.Calculadora.model.pojo.divisions;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "divisions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Division {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "dividend")
    private int dividend;

    @Column(name = "divisor")
    private int divisor;

    @Column(name = "quotient")
    private int quotient;

    @Column(name = "remainder")
    private int remainder;
}
