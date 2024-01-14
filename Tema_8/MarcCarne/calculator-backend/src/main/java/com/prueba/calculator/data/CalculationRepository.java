package com.prueba.calculator.data;

import org.springframework.data.jpa.repository.JpaRepository;
import com.prueba.calculator.model.pojo.Calculation;

public interface CalculationRepository extends JpaRepository<Calculation, Long> {
}
