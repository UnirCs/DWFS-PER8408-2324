package com.example.Calculadora.data.multiplication;

import com.example.Calculadora.model.pojo.multiplications.Multiplication;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class MultiplicationRepository {
    private final MultiplicationJpaRepository repository;
    public Multiplication save(Multiplication multiplication) {
        return repository.save(multiplication);
    }

    public Multiplication getById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
