package com.prueba.calculator.service;

import java.util.List;

import com.prueba.calculator.model.pojo.Calculation;
import com.prueba.calculator.model.request.CreateCalculationRequest;

public interface CalculationsService {

	List<Calculation> getCalculations();

	Calculation getCalculation(String calculationId);

	Boolean removeCalculation(String calculationId);

	Calculation createCalculation(Calculation request);

}
