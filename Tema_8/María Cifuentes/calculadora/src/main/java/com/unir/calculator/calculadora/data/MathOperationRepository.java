package com.unir.calculator.calculadora.data;

import com.unir.calculator.calculadora.model.pojo.MathOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MathOperationRepository {

    private final MathOperationJpaRepository repository;

    public List<MathOperation> getMathOperations() {
        return repository.findAll();
    }

    public MathOperation getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public MathOperation save(MathOperation mathOperation) {
        return repository.save(mathOperation);
    }
}
