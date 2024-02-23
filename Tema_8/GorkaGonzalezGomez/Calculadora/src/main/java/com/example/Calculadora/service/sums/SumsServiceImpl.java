package com.example.Calculadora.service.sums;

import com.example.Calculadora.data.sum.SumOperandRepository;
import com.example.Calculadora.data.sum.SumRepository;
import com.example.Calculadora.model.pojo.sums.Sum;
import com.example.Calculadora.model.pojo.sums.Addend;
import com.example.Calculadora.model.request.CreateSumRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@Slf4j
public class SumsServiceImpl implements SumsService {
    @Autowired
    private SumRepository sumRepository;
    @Autowired
    private SumOperandRepository sumOperandRepository;
    @Override
    public Sum createSum(CreateSumRequest request) {
        ArrayList<Integer> addends = request.getOperands().getAddends();
        int result = 0;
        for (Integer addend : addends) {
            result += addend;
        }

        Sum sum = Sum.builder().result(result).build();
        sumRepository.save(sum);

        for (Integer addend : addends) {
            Addend sumOperands = Addend.builder().addend(addend).sum(sum).build();
            sumOperandRepository.save(sumOperands);
        }
        return sum;
    }

    @Override
    public Sum getSum(String sumId) {
        return sumRepository.getById(Long.valueOf(sumId));
    }
}
