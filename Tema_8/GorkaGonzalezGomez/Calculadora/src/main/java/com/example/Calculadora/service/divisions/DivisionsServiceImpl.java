package com.example.Calculadora.service.divisions;

import com.example.Calculadora.data.division.DivisionRepository;
import com.example.Calculadora.model.pojo.divisions.Division;
import com.example.Calculadora.model.request.CreateDivisionRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class DivisionsServiceImpl implements DivisionsService {
    @Autowired
    private DivisionRepository divisionRepository;

    @Override
    public Division createDivision(CreateDivisionRequest request) {
        int dividend = request.getOperands().getDividend();
        int divisor = request.getOperands().getDivisor();
        Division division = Division.builder().dividend(dividend).divisor(divisor).
                quotient(dividend/divisor).remainder(dividend%divisor).build();
        return divisionRepository.save(division);
    }

    @Override
    public Division getDivision(String divisionId) {
        return divisionRepository.getById(Long.valueOf(divisionId));
    }
}
