package com.example.Calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "sums")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Sum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne(mappedBy = "sum", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private Operands operands;

    private Integer result;
}
