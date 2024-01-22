package com.example.Calculadora.data;

import com.example.Calculadora.model.pojo.Sum;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class SumRepository {
    private final SumJpaRepository repository;

    public Sum save(Sum sum) {
        return repository.save(sum);
    }
}
