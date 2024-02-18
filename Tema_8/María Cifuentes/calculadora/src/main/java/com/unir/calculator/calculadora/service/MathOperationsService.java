package com.unir.calculator.calculadora.service;

import com.unir.calculator.calculadora.model.pojo.MathOperation;
import com.unir.calculator.calculadora.model.request.CreateMathOperationRequest;

import java.util.List;

public interface MathOperationsService {
    List<MathOperation> getMathOperations();
    MathOperation getMathOperationById(String productId);
    MathOperation addMathOperation(CreateMathOperationRequest request);
}
