package com.unir.calculadora.service;

import com.unir.calculadora.data.MathOperationRepository;
import com.unir.calculadora.model.pojo.*;
import com.unir.calculadora.model.pojo.Error;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@Slf4j
public class OperationsServiceImp implements OperationsService{

    @Autowired
    private MathOperationRepository mathOperationRepository;

    @Override
    public BaseResponse<OperationResult, Error> calculateAddition(
            @RequestBody List<Double> operands
    ) {
        if (operands == null || operands.isEmpty()) {
            Error error = new Error("INVALID_OPERATION", "This operation is not valid");
            return new BaseResponse<>(null, error);
        }

        Double result = operands.stream().mapToDouble(f -> f.doubleValue()).sum();
        MathOperation mathOperation = new MathOperation(null, OperationType.ADDITION, operands, result);
        mathOperationRepository.saveMathOperation(mathOperation);
        OperationResult operationResult = new OperationResult(mathOperation.getId(), mathOperation.getResult());
        return new BaseResponse<>(operationResult, null);
    }


    @Override
    public BaseResponse<OperationResult, Error> calculateMultiplication(@RequestBody List<Double> operands) {
        if (operands == null || operands.isEmpty()) {
            Error error = new Error("INVALID_OPERATION", "This operation is not valid");
            return new BaseResponse<>(null, error);
        }
        Double result = operands.stream().mapToDouble(f -> f.doubleValue()).reduce(1.0, (a, b) -> a * b);
        MathOperation mathOperation = new MathOperation(null, OperationType.MULTIPLY, operands, result);
        mathOperationRepository.saveMathOperation(mathOperation);
        OperationResult operationResult = new OperationResult(mathOperation.getId(), mathOperation.getResult());
        return new BaseResponse<>(operationResult, null);
    };

    @Override
    public BaseResponse<OperationResult, Error> calculateDivision(@RequestBody List<Double> operands) {
        if (operands == null || operands.isEmpty() || operands.size() > 2 || operands.get(1) == 0) {
            Error error = new Error("INVALID_OPERATION", "This operation is not valid");
            return new BaseResponse<>(null, error);
        }

        Double result = operands.stream().mapToDouble(f -> f.doubleValue()).reduce(1.0, (a, b) -> a / b);
        MathOperation mathOperation = new MathOperation(null, OperationType.DIVISION, operands, result);
        mathOperationRepository.saveMathOperation(mathOperation);
        OperationResult operationResult = new OperationResult(mathOperation.getId(), mathOperation.getResult());
        return new BaseResponse<>(operationResult, null);
    };

    @Override
    public BaseResponse<OperationResult, Error> calculateRoot(@RequestBody List<Double> operands) {
        if (operands == null || operands.isEmpty() || operands.size() > 2) {
            Error error = new Error("INVALID_OPERATION", "This operation is not valid");
            return new BaseResponse<>(null, error);
        }

        Double result = Math.pow(operands.get(0), 1 / operands.get(1));
        MathOperation mathOperation = new MathOperation(null, OperationType.ROOT, operands, result);
        mathOperationRepository.saveMathOperation(mathOperation);
        OperationResult operationResult = new OperationResult(mathOperation.getId(), mathOperation.getResult());
        return new BaseResponse<>(operationResult, null);
    };

    @Override
    public BaseResponse<OperationResult, Error> calculatePower(@RequestBody List<Double> operands) {
        if (operands == null || operands.isEmpty() || operands.size() > 2) {
            Error error = new Error("INVALID_OPERATION", "This operation is not valid");
            return new BaseResponse<>(null, error);
        }

        Double result = Math.pow(operands.get(0), operands.get(1));
        MathOperation mathOperation = new MathOperation(null, OperationType.POWER, operands, result);
        mathOperationRepository.saveMathOperation(mathOperation);
        OperationResult operationResult = new OperationResult(mathOperation.getId(), mathOperation.getResult());
        return new BaseResponse<>(operationResult, null);
    };

    @Override
    public BaseResponse<OperationSummary, Error> getOperation(Long id) {
        MathOperation mathOperation = this.mathOperationRepository.getMathOperation(id);
        if (mathOperation == null) {
            Error error = new Error("NOT_FOUND", "This operation not found");
            return new BaseResponse<>(null, error);
        }
        return new BaseResponse<>(
                new OperationSummary(
                        mathOperation.getId(),
                        mathOperation.getResult(),
                        mathOperation.getOperands(),
                        mathOperation.getOperator()
                ), null);
    };
}
