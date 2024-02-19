package com.example.Calculadora.service.substractions;

import com.example.Calculadora.model.pojo.substractions.Substraction;
import com.example.Calculadora.model.request.CreateSubstractionRequest;

public interface SubstractionsService {
    Substraction createSubstraction(CreateSubstractionRequest request);

    Substraction getSubstraction(String substractionId);
}
