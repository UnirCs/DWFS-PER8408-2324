package com.unir.calculadora.service;

import com.unir.calculadora.model.request.CalculateAdditionRequest;
import com.unir.calculadora.model.request.CalculateSubtractionRequest;
import com.unir.calculadora.model.response.CalculateAdditionResponse;
import com.unir.calculadora.model.response.CalculateSubtractionResponse;

public interface OperationsService {
    CalculateAdditionResponse calculateAddition(CalculateAdditionRequest request);

    CalculateSubtractionResponse calculateSubtraction(CalculateSubtractionRequest request);
}
