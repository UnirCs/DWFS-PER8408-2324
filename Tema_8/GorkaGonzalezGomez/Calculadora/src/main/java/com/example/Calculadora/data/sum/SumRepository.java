package com.example.Calculadora.data.sum;

import com.example.Calculadora.model.pojo.sums.Sum;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class SumRepository {
    private final SumJpaRepository repository;
    public Sum save(Sum sum) {
        return repository.save(sum);
    }

    public Sum getById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
