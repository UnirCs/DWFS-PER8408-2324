package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.MathOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class MathOperationRepository {
    private final MathOperationJpaRepository mathOperationRepository;
    public MathOperation getMathOperation(Long operationId) {
        return mathOperationRepository.findById(operationId).orElse(null);
    }
    public MathOperation saveMathOperation(MathOperation mathOperation) {
        return mathOperationRepository.save(mathOperation);
    }
}
