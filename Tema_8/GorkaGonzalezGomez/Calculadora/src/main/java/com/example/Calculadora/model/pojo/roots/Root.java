package com.example.Calculadora.model.pojo.roots;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "roots")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Root {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "radicand")
    private int radicand;

    @Column(name = "index")
    private int index;

    @Column(name = "result")
    private int result;
}
