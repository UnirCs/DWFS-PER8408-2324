package com.example.Calculadora.service;

import com.example.Calculadora.data.SumRepository;
import com.example.Calculadora.model.pojo.Operands;
import com.example.Calculadora.model.pojo.Sum;
import com.example.Calculadora.model.request.CreateSumRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class SumsServiceImpl implements SumsService {
    @Autowired
    private SumRepository repository;
    @Override
    public Sum createSum(CreateSumRequest request) {
        List <Integer> addends = request.getOperands().getAddends();
        Operands operands = Operands.builder().addends(addends).build();
        Integer result = 0;
        for (Integer addend : addends) {
            result += addend;
        }
        Sum sum = Sum.builder().operands(null).result(result).build();
        repository.save(sum);
        operands.setSum(sum);
        sum.setOperands(operands);
        return repository.save(sum);
    }
}
