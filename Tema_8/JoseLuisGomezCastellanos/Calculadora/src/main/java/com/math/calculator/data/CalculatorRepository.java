package com.math.calculator.data;

import com.math.calculator.model.pojo.Oper;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class OperRepository {

    private final OperJpaRepository repository;

    public Oper getById(Long id) {
        return repository.findById(id).orElse(null);
    }
    
    public Oper save(Oper oper) {
        return repository.save(oper);
    }

}