package com.salvaroca.calculator.data;

import com.salvaroca.calculator.model.Calculation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CalculationJpaRepository extends JpaRepository<Calculation, Long>, JpaSpecificationExecutor<Calculation> {
}
