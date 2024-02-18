package com.unir.calculadora.dao;

import com.unir.calculadora.model.pojo.Operacion;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class OperacionRepository {

    private final OperacionJpaRepository repository;

    public Operacion findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Operacion save(Operacion operacion) {
        return repository.save(operacion);
    }
}
