package com.example.Calculadora.model.pojo.sums;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table(name = "sums")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Sum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToMany(mappedBy = "sum")
    private Set<Addend> addends;

    @Column(name = "result")
    private Integer result;
}
