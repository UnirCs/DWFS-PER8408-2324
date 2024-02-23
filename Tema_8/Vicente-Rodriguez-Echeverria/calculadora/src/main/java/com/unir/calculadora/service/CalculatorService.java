package com.unir.calculadora.service;

//import org.hibernate.mapping.List;
import java.util.List;
import com.unir.calculadora.model.pojo.Calculator;
import com.unir.calculadora.model.requests.CreateCalculatorRequest;

public interface CalculatorService {
    List<Calculator> getCalculators();
    Calculator getCalculator(long calculatorId);
    Calculator createCalculator(CreateCalculatorRequest request);
    //Calculator updateCalculator(CreateCalculadoraRequest calculator);
    //boolean deleteCalculator(long calculatorId);

}
