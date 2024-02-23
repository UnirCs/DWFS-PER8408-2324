package com.unir.calculadora.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unir.calculadora.model.pojo.Calculator;

public interface CalculatorRepository extends JpaRepository<Calculator, Long> {

}
