package com.salvaroca.calculator.data;

import com.salvaroca.calculator.model.Calculation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CalculationRepository {
    private final CalculationJpaRepository calculationJpaRepository;

    public List<Calculation> getAllCalculations() {
        return calculationJpaRepository.findAll();
    }
    public Calculation getCalculationById(Long calculationId) {
        return calculationJpaRepository.findById(calculationId).orElse(null);
    }

    public Calculation saveCalculation(Calculation calculation) {
        return calculationJpaRepository.save(calculation);
    }
}
