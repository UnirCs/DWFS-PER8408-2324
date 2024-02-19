package com.example.Calculadora.service.multiplications;

import com.example.Calculadora.model.pojo.multiplications.Multiplication;
import com.example.Calculadora.model.request.CreateMultiplicationRequest;

public interface MultiplicationsService {
    Multiplication createMultiplication(CreateMultiplicationRequest request);

    Multiplication getMultiplication(String multiplicationId);
}
