package com.unir.calculadora.service;

import com.unir.calculadora.model.request.*;
import com.unir.calculadora.model.response.*;

import java.util.UUID;

public interface OperationsService {
    CalculateAdditionResponse calculateAddition(CalculateAdditionRequest request);

    CalculateSubtractionResponse calculateSubtraction(CalculateSubtractionRequest request);

    CalculateMultiplicationResponse calculateMultiplication(CalculateMultiplicationRequest request);

    CalculateDivisionResponse calculateDivision(CalculateDivisionRequest request);

    CalculateRootResponse calculateRoot(CalculateRootRequest request);

    CalculatePowerResponse calculatePower(CalculatePowerRequest request);

    GetOperationResponse getOperation(UUID id);
}
