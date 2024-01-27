package com.unir.calculadora.service;

import com.unir.calculadora.data.OperationsRepository;
import com.unir.calculadora.model.pojo.*;
import com.unir.calculadora.model.request.*;
import com.unir.calculadora.model.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class OperationsServiceImpl implements OperationsService {
    @Autowired
    private OperationsRepository repository;

    @Override
    public CalculateAdditionResponse calculateAddition(CalculateAdditionRequest request) {
        Addition addition = Addition.calculateAddition(request.getAddends());
        addition = repository.saveAddition(addition);
        return new CalculateAdditionResponse(addition.getId(), addition.getResult());
    }

    @Override
    public CalculateSubtractionResponse calculateSubtraction(CalculateSubtractionRequest request) {
        Subtraction subtraction = Subtraction.calculateSubtraction(request.getMinuend(), request.getSubtrahends());
        subtraction = repository.saveSubtraction(subtraction);
        return new CalculateSubtractionResponse(subtraction.getId(), subtraction.getResult());
    }

    @Override
    public CalculateMultiplicationResponse calculateMultiplication(CalculateMultiplicationRequest request) {
        Multiplication multiplication = Multiplication.calculateMultiplication(request.getMultiplicand(), request.getMultiplier());
        multiplication = repository.saveMultiplication(multiplication);
        return new CalculateMultiplicationResponse(multiplication.getId(), multiplication.getResult());
    }

    @Override
    public CalculateDivisionResponse calculateDivision(CalculateDivisionRequest request) {
        Division division = Division.calculateDivision(request.getDividend(), request.getDivisor());
        division = repository.saveDivision(division);
        return new CalculateDivisionResponse(division.getId(), division.getResult());
    }

    @Override
    public CalculateRootResponse calculateRoot(CalculateRootRequest request) {
        Root root = Root.calculateRoot(request.getRadicand(), request.getIndex());
        root = repository.saveRoot(root);
        return new CalculateRootResponse(root.getId(), root.getResult());
    }

    @Override
    public CalculatePowerResponse calculatePower(CalculatePowerRequest request) {
        Power power = Power.calculatePower(request.getBase(), request.getPower());
        power = repository.savePower(power);
        return new CalculatePowerResponse(power.getId(), power.getResult());
    }

    @Override
    public GetOperationResponse getOperation(UUID id) {
        Operation operation = repository.getOperation(id);
        if (operation == null) {
            return null;
        }
        return GetOperationResponse.createResponse(operation);
    }
}