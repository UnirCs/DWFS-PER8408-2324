package com.example.Calculadora.data.sum;

import com.example.Calculadora.model.pojo.sums.Addend;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class SumOperandRepository {
    private final SumOperandJpaRepository repository;
    public Addend save(Addend addend) { return repository.save(addend); }
}
