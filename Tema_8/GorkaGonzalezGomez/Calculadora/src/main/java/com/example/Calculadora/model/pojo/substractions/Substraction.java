package com.example.Calculadora.model.pojo.substractions;

import jakarta.persistence.*;
import lombok.*;
import java.util.Set;

@Entity
@Table(name = "substractions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Substraction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private int minuend;

    @OneToMany(mappedBy = "substraction")
    private Set<Substrahend> substrahends;

    @Column(name = "result")
    private Integer result;
}
