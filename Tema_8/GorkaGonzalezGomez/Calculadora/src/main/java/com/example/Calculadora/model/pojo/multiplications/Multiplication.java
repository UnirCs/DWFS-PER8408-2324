package com.example.Calculadora.model.pojo.multiplications;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "multiplications")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Multiplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "multiplicand")
    private int multiplicand;

    @Column(name = "multiplier")
    private int multiplier;

    @Column(name = "result")
    private Integer result;
}
