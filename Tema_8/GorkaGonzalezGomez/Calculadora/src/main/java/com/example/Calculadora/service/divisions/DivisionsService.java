package com.example.Calculadora.service.divisions;

import com.example.Calculadora.model.pojo.divisions.Division;
import com.example.Calculadora.model.pojo.multiplications.Multiplication;
import com.example.Calculadora.model.request.CreateDivisionRequest;
import com.example.Calculadora.model.request.CreateMultiplicationRequest;

public interface DivisionsService {
    Division createDivision(CreateDivisionRequest request);

    Division getDivision(String divisionId);
}
