package com.unir.calculadora.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unir.calculadora.model.pojo.Calculator;
import com.unir.calculadora.model.requests.CreateCalculatorRequest;
import com.unir.calculadora.repository.CalculatorRepository;

@Service
public class CalculatorServiceImpl implements CalculatorService {
    @Autowired
    private CalculatorRepository repository;

    @Override
    public List<Calculator> getCalculators() {
        List<Calculator> calculators = repository.findAll();
        return calculators.isEmpty() ? null : calculators;
    }

    @Override
    public Calculator getCalculator(long calculatorId) {
        Calculator calculator = repository.findById(calculatorId).orElse(null);
        return calculator;
    }

    @Override
    public Calculator createCalculator(CreateCalculatorRequest request) {
        if (request != null && (request.getOperacion().trim().length() > 0)
                && request.getNumeros().trim().length() > 0) {
            String valores[] = request.getNumeros().split(",");
            String error="";
            double resultado = 0;
            switch (request.getOperacion()) {
                case "suma": {
                    for (int i = 0; i < valores.length; i++) {
                        resultado += Double.parseDouble(valores[i]);
                    }
                    break;
                }
                case "resta": {
                    for (int i = 0; i < valores.length; i++) {
                        resultado += Double.parseDouble(valores[i]);
                    }
                    break;
                }
                case "multiplicacion": {
                    resultado=1;
                    for (int i = 0; i < valores.length; i++) {
                        resultado *= Double.parseDouble(valores[i]);
                    }
                    break;
                }
                case "division": {
                    resultado = Double.parseDouble(valores[0]) / Double.parseDouble(valores[1]);
                    break;
                }
                case "raiz": {
                    resultado = Math.pow(Double.parseDouble(valores[0]), 1.0 / Double.parseDouble(valores[1]));
                    break;
                }
                case "potencia": {
                    resultado = Math.pow(Double.parseDouble(valores[0]), Double.parseDouble(valores[1]));
                    break;
                }
                default: {
                    resultado=0;
                    break;
                }
            }
            request.setResultado(resultado);
            request.setError(error);
            Calculator calculator = Calculator.builder().operacion(request.getOperacion()).numeros(request.getNumeros()).resultado(resultado).error(error).build();
            return repository.save(calculator);
        }
        else{
            return null;
        }
    }

}
