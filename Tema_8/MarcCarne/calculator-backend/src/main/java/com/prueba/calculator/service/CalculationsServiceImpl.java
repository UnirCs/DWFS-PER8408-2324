package com.prueba.calculator.service;

import java.util.ArrayList;
import java.util.List;

import com.prueba.calculator.data.CalculationRepository;
import com.prueba.calculator.data.OperandRepository;
import com.prueba.calculator.model.pojo.Operand;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.prueba.calculator.model.pojo.Calculation;

@Service
@Slf4j
public class CalculationsServiceImpl implements CalculationsService {

	@Autowired
	private CalculationRepository calculationRepository;

  	@Override
	public List<Calculation> getCalculations() {
		List<Calculation> calculations = calculationRepository.findAll();
		return calculations.isEmpty() ? null : calculations;
	}

	@Override
	public Calculation getCalculation(String calculationId) {
		return calculationRepository.findById(Long.valueOf(calculationId)).orElse(null);
	}

	@Override
	public Boolean removeCalculation(String calculationId) {

		Calculation calculation = calculationRepository.findById(Long.valueOf(calculationId)).orElse(null);

		if (calculation != null) {
			calculationRepository.delete(calculation);
			return Boolean.TRUE;
		} else {
			return Boolean.FALSE;
		}
	}

	@Override
	public Calculation createCalculation(Calculation calculation) {

		if (calculation != null && StringUtils.hasLength(calculation.getOperation().trim())) {

			// Falta calcular el resultado de la operación antes de insertarla en base de datos
			List<Double> operands = new ArrayList<>();
			for (Operand operand : calculation.getOperandList()) {
				operands.add(operand.getValor());
			}

			boolean badOperation = false;
			if (!operands.isEmpty()) {
				// Adquirir y eliminar el primer elemento
				Double result = operands.get(0);
				operands.remove(0);
				switch(calculation.getOperation()) {
					case "+":
						for (Double operand : operands) {
							result = result + operand;
						}
						break;
					case "-":
						for (Double operand : operands) {
							result = result - operand;
						}
						break;
					case "*":
						for (Double operand : operands) {
							result = result * operand;
						}
						break;
					case "/":
						if (operands.size() != 1){
							badOperation = true;
						} else {
							result = result / operands.get(0);
						}
						break;
					case "root":
						if (operands.size() != 1){
							badOperation = true;
						} else {
							result = Math.pow(result, 1 / operands.get(0));
						}
						break;
					case "pow":
						if (operands.size() != 1){
							badOperation = true;
						} else {
							result = Math.pow(result, operands.get(0));
						}
						break;
					default:
						badOperation = true;
				}

				if (badOperation) {
					return null;
				} else {
					// Add result
					calculation.setResult(result);
					return calculationRepository.save(calculation);
				}
			} else {
				return null;
			}
		} else {
			return null;
		}
	}


}
