package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.Addition;
import com.unir.calculadora.model.pojo.Subtraction;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class OperationsRepository {
    private final AdditionJpaRepository additionJpaRepository;
    private final SubtractionJpaRepository subtractionJpaRepository;

    public Addition saveAddition(Addition addition) {
        return additionJpaRepository.save(addition);
    }

    public Subtraction saveSubtraction(Subtraction subtraction) {
        return subtractionJpaRepository.save(subtraction);
    }

}
