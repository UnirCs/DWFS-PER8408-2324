package com.example.Calculadora.data.root;

import com.example.Calculadora.model.pojo.multiplications.Multiplication;
import com.example.Calculadora.model.pojo.roots.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class RootRepository {
    private final RootJpaRepository repository;
    public Root save(Root root) {
        return repository.save(root);
    }

    public Root getById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
