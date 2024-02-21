package com.example.Calculadora.service.substractions;

import com.example.Calculadora.data.substraction.SubstractionRepository;
import com.example.Calculadora.data.substraction.SubstrahendRepository;
import com.example.Calculadora.model.pojo.substractions.Substraction;
import com.example.Calculadora.model.pojo.substractions.Substrahend;
import com.example.Calculadora.model.request.CreateSubstractionRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@Slf4j
public class SubstractionsServiceImpl implements SubstractionsService {
    @Autowired
    private SubstractionRepository substractionRepository;
    @Autowired
    private SubstrahendRepository substrahendRepository;

    @Override
    public Substraction createSubstraction(CreateSubstractionRequest request) {
        ArrayList<Integer> substrahends = request.getOperands().getSubstrahends();
        int result = request.getOperands().getMinuend();
        for (Integer substrahend : substrahends) {
            result -= substrahend;
        }

        Substraction substraction = Substraction.builder().minuend(request.getOperands().getMinuend()).result(result).build();
        substractionRepository.save(substraction);

        for (Integer substrahend : substrahends) {
            Substrahend substrahendObject = Substrahend.builder().substrahend(substrahend).substraction(substraction).build();
            substrahendRepository.save(substrahendObject);
        }
        return substraction;
    }

    @Override
    public Substraction getSubstraction(String substractionId) {
        return substractionRepository.getById(Long.valueOf(substractionId));
    }
}
