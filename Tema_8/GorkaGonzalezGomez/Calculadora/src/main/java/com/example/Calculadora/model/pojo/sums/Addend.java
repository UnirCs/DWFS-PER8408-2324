package com.example.Calculadora.model.pojo.sums;

import com.example.Calculadora.model.pojo.sums.Sum;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="addends")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Addend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long sumOperandId;

    @ManyToOne
    @JoinColumn(name="sum_id", nullable = false)
    private Sum sum;

    @Column(name = "addend")
    private Integer addend;
}
