package com.unir.calculadora.service;

import com.unir.calculadora.data.OperationsRepository;
import com.unir.calculadora.model.pojo.Addition;
import com.unir.calculadora.model.pojo.Subtraction;
import com.unir.calculadora.model.request.CalculateAdditionRequest;
import com.unir.calculadora.model.request.CalculateSubtractionRequest;
import com.unir.calculadora.model.response.CalculateAdditionResponse;
import com.unir.calculadora.model.response.CalculateSubtractionResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OperationsServiceImpl implements OperationsService {
    @Autowired
    private OperationsRepository repository;

    @Override
    public CalculateAdditionResponse calculateAddition(CalculateAdditionRequest request) {
        Addition addition = Addition.calculateAddition(request.getOperands());
        addition = repository.saveAddition(addition);
        return new CalculateAdditionResponse(addition.getId(), addition.getResult());
    }

    @Override
    public CalculateSubtractionResponse calculateSubtraction(CalculateSubtractionRequest request) {
        Subtraction subtraction = Subtraction.calculateSubtraction(request.getMinuend(), request.getSubtrahends());
        subtraction = repository.saveSubtraction(subtraction);
        return new CalculateSubtractionResponse(subtraction.getId(), subtraction.getResult());
    }
}