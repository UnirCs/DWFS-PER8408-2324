package com.unir.calculator.calculadora.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.unir.calculator.calculadora.data.MathOperationRepository;
import com.unir.calculator.calculadora.model.pojo.MathOperation;
import com.unir.calculator.calculadora.model.request.CreateMathOperationRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
@Service
@Slf4j
public class MathOperationsServiceImpl implements MathOperationsService{

    @Autowired
    private MathOperationRepository repository;

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public List<MathOperation> getMathOperations() {

        List<MathOperation> operations = repository.getMathOperations();
        return operations.isEmpty() ? null : operations;
    }

    @Override
    public MathOperation getMathOperationById(String productId) {
        return repository.getById(Long.valueOf(productId));
    }


    @Override
    public MathOperation addMathOperation(CreateMathOperationRequest request) {

        if (request != null && StringUtils.hasLength(request.getTipo().trim())
                && !request.getElementos().isEmpty()) {
            Double resultado = null;
            switch (request.getTipo().toLowerCase().trim()){
                case "sumar":
                    resultado = request.getElementos().parallelStream().mapToDouble(e -> e).sum();
                    break;
                case "restar":
                    resultado = request.getElementos().stream().reduce(0.0, (a, b) -> a - b);
                    break;
                case "multiplicar":
                    resultado = request.getElementos().get(0)*request.getElementos().get(1);
                    break;
                case "dividir":
                    resultado = request.getElementos().get(0)/request.getElementos().get(1);
                    break;
                case "raiz":
                    resultado = Math.pow(request.getElementos().get(0),1/request.getElementos().get(1));
                    break;
                case "potencia":
                    resultado = Math.pow(request.getElementos().get(0),request.getElementos().get(1));
                    break;
                default:
            }

            if(resultado != null){
                MathOperation mathOperation = MathOperation.builder().tipo(request.getTipo()).elementos(request.getElementos())
                        .resultado(resultado).build();
                return repository.save(mathOperation);
            }else{
                return null;
            }
        } else {
            return null;
        }
    }
}
