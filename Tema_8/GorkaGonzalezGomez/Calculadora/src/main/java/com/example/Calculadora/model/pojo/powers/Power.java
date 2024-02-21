package com.example.Calculadora.model.pojo.powers;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "powers")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Power {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "base")
    private int base;

    @Column(name = "power")
    private int power;

    @Column(name = "result")
    private int result;
}
