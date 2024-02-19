package com.example.Calculadora.model.pojo.substractions;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="substrahends")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Substrahend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long substractionSubstrahendId;

    @ManyToOne
    @JoinColumn(name="substraction_id", nullable = false)
    private Substraction substraction;

    @Column(name = "substrahend")
    private Integer substrahend;
}
