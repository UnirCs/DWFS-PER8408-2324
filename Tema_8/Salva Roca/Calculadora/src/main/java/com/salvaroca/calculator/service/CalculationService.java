package com.salvaroca.calculator.service;

import com.salvaroca.calculator.model.Calculation;
import com.salvaroca.calculator.model.CalculationDto;

import java.util.List;

public interface CalculationService {
    List<Calculation> getAllCalculations();

    Calculation getCalculationById(String id);

    Calculation saveCalculation(CalculationDto calculationDto);
}
