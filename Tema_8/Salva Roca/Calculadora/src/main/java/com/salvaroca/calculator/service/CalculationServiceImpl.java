package com.salvaroca.calculator.service;

import com.salvaroca.calculator.data.CalculationRepository;
import com.salvaroca.calculator.model.Calculation;
import com.salvaroca.calculator.model.CalculationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalculationServiceImpl implements CalculationService {
    @Autowired
    private CalculationRepository calculationRepository;

    @Override
    public List<Calculation> getAllCalculations() {
        return calculationRepository.getAllCalculations();
    }
    @Override
    public Calculation getCalculationById(String id) {
        return calculationRepository.getCalculationById(Long.valueOf(id));
    }

    @Override
    public Calculation saveCalculation(CalculationDto calculationDto) {
        Double result = null;

        switch (calculationDto.getOperation()) {
            case "add":
                result = calculationDto.getOperands().stream().reduce(0.0, Double::sum);
                break;
            case "subtract":
                result = calculationDto.getOperands().stream().reduce(0.0, (acc, elem) -> acc - elem);
                break;
            case "multiply":
                result = calculationDto.getOperands().stream().reduce(1.0, (acc, elem) -> acc * elem);
                break;
            case "divide":
                if (calculationDto.getOperands().size() == 2) {
                    result = calculationDto.getOperands().get(0) / calculationDto.getOperands().get(1);
                }
                break;
            case "root":
                if (calculationDto.getOperands().size() == 2) {
                    result = Math.pow(calculationDto.getOperands().get(0), 1 / calculationDto.getOperands().get(1));
                }
                break;
            case "potency":
                if (calculationDto.getOperands().size() == 2) {
                    result = Math.pow(calculationDto.getOperands().get(0), calculationDto.getOperands().get(1));
                }
                break;
            default:
                // Operación no reconocida, mantenemos result = null;
        }

        if (result != null) {
            Calculation calculation = Calculation.builder()
                    .operation(calculationDto.getOperation())
                    .operands(calculationDto.getOperands())
                    .result(result)
                    .build();
            return calculationRepository.saveCalculation(calculation);
        } else {
            return null;
        }
    }
}
