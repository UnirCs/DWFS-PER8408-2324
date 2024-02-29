package com.example.Calculadora.data.substraction;

import com.example.Calculadora.model.pojo.substractions.Substraction;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class SubstractionRepository {
    private final SubstractionJpaRepository repository;

    public Substraction save(Substraction substraction) {
        return repository.save(substraction);
    }

    public Substraction getById(Long id) { return repository.findById(id).orElse(null); }
}
