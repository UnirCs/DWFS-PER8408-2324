package com.example.Calculadora.data.substraction;

import com.example.Calculadora.model.pojo.substractions.Substrahend;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class SubstrahendRepository {
    private final SubstrahendJpaRepository repository;

    public Substrahend save(Substrahend substrahend) {
        return repository.save(substrahend);
    }
}
