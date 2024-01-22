package com.example.Calculadora.service;

import com.example.Calculadora.model.pojo.Sum;
import com.example.Calculadora.model.request.CreateSumRequest;

public interface SumsService {
    Sum createSum(CreateSumRequest request);
}
