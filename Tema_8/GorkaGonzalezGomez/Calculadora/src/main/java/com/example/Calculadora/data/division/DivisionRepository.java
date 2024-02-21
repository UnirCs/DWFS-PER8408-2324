package com.example.Calculadora.data.division;

import com.example.Calculadora.model.pojo.divisions.Division;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class DivisionRepository {
    private final DivisionJpaRepository repository;
    public Division save(Division division) {
        return repository.save(division);
    }

    public Division getById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
