package com.example.Calculadora.service.multiplications;

import com.example.Calculadora.data.multiplication.MultiplicationRepository;
import com.example.Calculadora.model.pojo.multiplications.Multiplication;
import com.example.Calculadora.model.request.CreateMultiplicationRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class MultiplicationsServiceImpl implements MultiplicationsService {
    @Autowired
    private MultiplicationRepository multiplicationRepository;

    @Override
    public Multiplication createMultiplication(CreateMultiplicationRequest request) {
        int multiplicand = request.getOperands().getMultiplicand();
        int multiplier = request.getOperands().getMultiplier();
        Multiplication multiplication = Multiplication.builder().multiplicand(multiplicand).multiplier(multiplier).result(multiplicand*multiplier).build();
        return multiplicationRepository.save(multiplication);
    }

    @Override
    public Multiplication getMultiplication(String multiplicationId) {
        return multiplicationRepository.getById(Long.valueOf(multiplicationId));
    }
}
