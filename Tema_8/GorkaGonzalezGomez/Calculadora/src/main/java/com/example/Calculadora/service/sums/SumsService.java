package com.example.Calculadora.service.sums;

import com.example.Calculadora.model.pojo.sums.Sum;
import com.example.Calculadora.model.request.CreateSumRequest;

public interface SumsService {
    Sum createSum(CreateSumRequest request);
    Sum getSum(String sumId);

}
