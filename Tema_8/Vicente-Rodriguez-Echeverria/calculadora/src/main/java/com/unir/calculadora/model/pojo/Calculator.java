package com.unir.calculadora.model.pojo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "calculator")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Calculator {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    long id;
    @Column(name="operacion")
    String operacion;
    @Column(name="numeros")
    String numeros;
    @Column(name="resultados")
    double resultado;
    @Column(name="error")
    String error;
}
