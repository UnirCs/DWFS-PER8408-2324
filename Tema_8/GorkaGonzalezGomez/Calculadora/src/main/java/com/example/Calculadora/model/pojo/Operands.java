package com.example.Calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name = "operands")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Operands {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private ArrayList<Integer> addends;
}
